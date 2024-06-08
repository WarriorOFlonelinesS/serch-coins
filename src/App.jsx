import { useState, useEffect, useRef } from 'react';
import { CoinSearch } from './components/CoinSearch';
import './App.css';

const App = () => {
  const [clicked, setClicked] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handlerClick = () => {
    setClicked(!clicked);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div
        className={`search__button ${clicked ? 'search__button_active' : ''}`}
        onClick={handlerClick}
        ref={buttonRef}>
        <div className='image' />
        <p className='button_text'>SEARCH</p>
      </div>
      {clicked && (
        <div
          className='app'
          ref={menuRef}>
          <CoinSearch />
        </div>
      )}
    </div>
  );
};

export default App;
