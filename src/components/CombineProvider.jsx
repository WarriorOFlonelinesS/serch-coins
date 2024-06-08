// contexts/CombinedProvider.js
import { FavouritedCoinProvider } from '../contexts/FavoritedCoinContext';
import { FilteredFavouritedCoinProvider } from '../contexts/FilteredFavouritedCoinContext ';

const CombinedProvider = ({ children }) => {
  return (
    <FavouritedCoinProvider>
      <FilteredFavouritedCoinProvider>{children}</FilteredFavouritedCoinProvider>
    </FavouritedCoinProvider>
  );
};

export default CombinedProvider;
