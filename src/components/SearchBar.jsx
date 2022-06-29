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
      <button className={style.button} onClick={e => 
        {
          e.preventDefault();
          prop.onSearch(city);
          setCity('');
        }
      }>Agregar</button>
    </div>
  );
}

export default SearchBar;