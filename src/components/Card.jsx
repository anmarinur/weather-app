import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className={style.card}>
      <button className={style.x} onClick={props.onClose}>x</button>
      <Link className={style.link} to={`/ciudad/${props.id}`} >
        <div className={style.title}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1D3E53" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="11" r="3" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
          </svg>
          <h1 className={style.h1}>{props.name}</h1>
        </div>
      </Link>
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