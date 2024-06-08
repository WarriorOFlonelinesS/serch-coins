import { useContext, useState } from "react";
import { FavouritedCoinContext } from "../contexts/FavoritedCoinContext";

export const AllCoins = ({ coinList }) => {
  const {favouritedCoins, setFavouritedCoins} = useContext(FavouritedCoinContext)

  const handleChecked = (id) => {
    setFavouritedCoins((prevCheckedItems) =>
      prevCheckedItems.includes(id)
        ? prevCheckedItems.filter((itemId) => itemId !== id)
        : [...prevCheckedItems, id]
    );
  };
  return coinList.map((coin) => (
    <li
      className='list-item'
      key={coin}>
      <div
        className={`list-item__star ${favouritedCoins.includes(coin) ? 'list-item__star_active' : ''}`}
        onClick={() => handleChecked(coin)}
      />
      {coin}
    </li>
  ));
};
