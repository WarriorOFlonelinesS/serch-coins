import CoinList from './CoinList';
import DATA from '../coins.json';
import { useState, useEffect, useContext } from 'react';
import { FavouritedCoinContext } from '../contexts/FavoritedCoinContext';
import { FilteredFavouritedCoinContext } from '../contexts/FilteredFavouritedCoinContext ';

const filterCoins = (searchText, listOfCoins) => {
  if (!searchText) {
    console.log(listOfCoins);
    return listOfCoins;
  }
  return listOfCoins.filter((coinName) =>
    coinName.toLowerCase().includes(searchText.toLowerCase())
  );
};

export const CoinSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCoins, setFilteredCoins] = useState(DATA);
  const { favouritedCoins } = useContext(FavouritedCoinContext);
  const { setFilteredFavouritedCoins } = useContext(FilteredFavouritedCoinContext);
  const heandlerSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const heandlerClear = () => {
    setSearchTerm('');
  };

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const allFilteredCoins = filterCoins(searchTerm, DATA);
      const favouriteFilteredCoins = filterCoins(searchTerm, favouritedCoins);
      setFilteredCoins(allFilteredCoins);
      setFilteredFavouritedCoins(favouriteFilteredCoins);
    }, 100);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);
  return (
    <div className='search-bar'>
      <form
        className='search-bar__form'
        action='#'>
        <div className='search-bar__image' />
        <input
          className='search-bar__input'
          type='text'
          value={searchTerm}
          placeholder='Search...'
          onChange={heandlerSearch}
        />
        {searchTerm !== '' && (
          <div
            className='search-bar__exit'
            onClick={heandlerClear}
          />
        )}
      </form>
      <CoinList coinList={filteredCoins} />
    </div>
  );
};
