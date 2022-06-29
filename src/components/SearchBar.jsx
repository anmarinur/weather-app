import { useState } from 'react';

function SearchBar(prop) {
  const [city, setCity] = useState('');

  function handleInputChange(e) {
    setCity(e.target.value);
  }

  return (
    <div>
      <input type="text" placeholder="Ciudad..." onChange={handleInputChange} value={city}></input>
      <button onClick={e => 
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