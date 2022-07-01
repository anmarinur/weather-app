import React from 'react';
import { useState } from 'react';
import Cards from './components/Cards';
import Nav from './components/Nav';
import "./App.css";
import { Route } from 'react-router-dom';
import About from './components/About'

function App() {
  const [cities, setCities] = useState([]);

  let apiKey = process.env.REACT_APP_APIKEY;
  console.log(apiKey)

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => 
      {
        if (data.main !== undefined) {
          let ciudad = {
            min: Math.round(data.main.temp_min),
            max: Math.round(data.main.temp_max),
            img: data.weather[0].icon,
            id: data.id,
            wind: data.wind.speed,
            temp: data.main.temp,
            name: data.name,
            weather: data.weather[0].main,
            clouds: data.clouds.all,
            latitud: data.coord.lat,
            longitud: data.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no econtrada");
        }
      }
    )
  }

  function onClose(id) {
    setCities(previousState => previousState.filter(city => city.id !== id))
  }

  return (
    <div>
      <Route 
        path="/"
        render = {() => <Nav onSearch={onSearch} />} 
      />

      <Route path="/about" component = {About} />
      
      <Cards cities={cities} onClose={onClose} />
      <h2 class="h2">Weather app by Anderson Marín © 2022</h2>
    </div>
  );
}

export default App;
