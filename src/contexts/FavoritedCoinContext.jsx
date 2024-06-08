import { createContext, useState } from 'react';

const FavouritedCoinContext = createContext();

const FavouritedCoinProvider = ({ children }) => {
  const [favouritedCoins, setFavouritedCoins] = useState([]);
  return (
    <FavouritedCoinContext.Provider value={{ favouritedCoins, setFavouritedCoins }}>
      {children}
    </FavouritedCoinContext.Provider>
  );
};

export { FavouritedCoinContext, FavouritedCoinProvider };
