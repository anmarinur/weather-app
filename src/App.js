import React from 'react';
import { useState } from 'react';
import Cards from './components/Cards';
import Nav from './components/Nav';
import { Route } from 'react-router-dom';
import About from './components/About';
import Ciudad from './components/Ciudad';
import style from './App.module.css'
import Login from './components/Login'

function App() {
  const [cities, setCities] = useState([]);

  // let apiKey = process.env.REACT_APP_APIKEY;

  function onSearch(ciudad) {
    // fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=/.netlify/functions/api&units=metric`)
    const prueba = "/.netlify/functions";
    fetch(prueba)
    .then((dato) => console.log("Respuesta: " + dato))
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

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <div>

      <Nav onSearch={onSearch} />

      <Route 
        strict
        exact
        path="/"
        render = {() => <Cards cities={cities} onClose={onClose} />} 
      />

      <Route path="/about" component = {About} />

      <Route path="/login" component = {Login} />

      <Route
        exact
        path='/ciudad/:ciudadId'
        render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
      />
      
      <h2 className={style.h2}>Weather app by Anderson Marín © 2022</h2>
    </div>
  );
}

export default App;
