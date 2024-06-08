// components/FavoritedCoins.js
import { useContext, useEffect } from 'react';
import { FavouritedCoinContext } from '../contexts/FavoritedCoinContext';
import { FilteredFavouritedCoinContext } from '../contexts/FilteredFavouritedCoinContext ';

export const FavoritedCoins = () => {
  const { favouritedCoins, setFavouritedCoins } = useContext(FavouritedCoinContext);
  const { filteredFavouritedCoins, setFilteredFavouritedCoins } = useContext(
    FilteredFavouritedCoinContext
  );

  const handleChecked = (coin) => {
    setFavouritedCoins((prevFavouritedCoins) =>
      prevFavouritedCoins.includes(coin)
        ? prevFavouritedCoins.filter((favouritedCoin) => favouritedCoin !== coin)
        : [...prevFavouritedCoins, coin]
    );
  };

  useEffect(() => {
    setFilteredFavouritedCoins(favouritedCoins);
  }, [favouritedCoins, setFilteredFavouritedCoins]);

  return (
    <ul className='coin-list'>
      {filteredFavouritedCoins.map((coin) => (
        <li
          key={coin}
          className='list-item'>
          <div
            className={`list-item__star ${
              favouritedCoins.includes(coin) ? 'list-item__star_active' : ''
            }`}
            onClick={() => handleChecked(coin)}
          />
          {coin}
        </li>
      ))}
    </ul>
  );
};
