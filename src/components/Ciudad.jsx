import React from 'react';

function Ciudad({city}) {
  console.log(city)
  return (
    <div>
      <div><h1>{city.name}</h1></div>
      <div>Temperatura: {city.temp} ºC</div>
      <div>Clima: {city.weather}</div>
      <div>Viento: {city.wind} km/h</div>
      <div>Cantidad de nubes: {city.clouds}</div>
      <div>Latitud: {city.latitud}º</div>
      <div>Longitud: {city.longitud}º</div>
    </div>
  );
}

export default Ciudad;