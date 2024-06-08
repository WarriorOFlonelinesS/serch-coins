import { createContext, useContext, useState } from 'react';
import { FavouritedCoinContext } from './FavoritedCoinContext';

const FilteredFavouritedCoinContext = createContext();

const FilteredFavouritedCoinProvider = ({ children }) => {
  const { favouritedCoins } = useContext(FavouritedCoinContext);
  const [filteredFavouritedCoins, setFilteredFavouritedCoins] = useState([]);

  return (
    <FilteredFavouritedCoinContext.Provider
      value={{ filteredFavouritedCoins, setFilteredFavouritedCoins }}>
      {children}
    </FilteredFavouritedCoinContext.Provider>
  );
};

export { FilteredFavouritedCoinContext, FilteredFavouritedCoinProvider };
