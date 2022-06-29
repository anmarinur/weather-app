import React from 'react'

function Card(props) {
  return (
    <div>
      <button onClick={props.onClose}>x</button>
      <h1>{props.name}</h1>
      <h2>Min</h2>
      <p>{props.min}</p>
      <h2>Max</h2>
      <p>{props.max}</p>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt = "Icono-clima"/>
    </div>
  );
}

export default Card;