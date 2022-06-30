import React from 'react'
import style from './Card.module.css'

function Card(props) {
  return (
    <div className={style.card}>
      <button className={style.x} onClick={props.onClose}>x</button>
      <div>
        <h1 className={style.h1}>{props.name}</h1>
      </div>
      <div className={style.info}>
        <div className={style.subInfo}>
          <h2 className={style.h2}>Min</h2>
          <p className={style.p}>{props.min}</p>
        </div>
        <img className={style.img} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt = "Icono-clima"/>
        <div className={style.subInfo}>
          <h2 className={style.h2}>Max</h2>
          <p className={style.p}>{props.max}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;