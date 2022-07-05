import { useState } from 'react';
import style from "./SearchBar.module.css"

function SearchBar(prop) {
  const [city, setCity] = useState('');

  function handleInputChange(e) {
    setCity(e.target.value);
  }

  return (
    <div className={style.main}>
      <input className={style.input} type="text" placeholder="Ciudad..." onChange={handleInputChange} value={city}></input>
        <div className={style.button} onClick={e => 
        {
          prop.onSearch(city);
          setCity('');
        }
        }>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="10" cy="10" r="7" />
        <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;