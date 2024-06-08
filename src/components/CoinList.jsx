import { useState } from 'react';
import { AllCoins } from './AllCoins';
import { FavoritedCoins } from './FavoritedCoins';

const CoinList = ({ coinList }) => {
  const [favorited, setFavorited] = useState(false);

  const handleSwitchFavourited = () => {
    setFavorited(true);
  };

  const handleSwitchAllCoins = () => {
    setFavorited(false);
  };

  return (
    <div className='coin-list'>
      <div className='list-buttons'>
        <button
          className='coin-list__button'
          onClick={handleSwitchFavourited}>
          {' '}
          FAVORITE COINS
        </button>
        <button
          className='coin-list__button'
          onClick={handleSwitchAllCoins}>
          ALL COINS
        </button>
      </div>
      <ul className='coin-list-items'>
        {favorited ? <FavoritedCoins /> : <AllCoins coinList={coinList} />}
      </ul>
    </div>
  );
};

export default CoinList;
