import React from 'react';
import style from './Welcome.module.css'

function Welcome() {
  return (
    <div className={style.div}>
      <h1 className={style.h1}>Bienvenido a <span className={style.span}>The Weather App</span></h1>
      <p className={style.p}>Para empezar, escribe en la barra de búsqueda la ciudad que quieres consultar y obtendrás una tarjeta con sus datos climáticos. Puedes agregar tantas ciudades como quieras. Si quieres tener más información de la ciudad que buscaste, da clic encima y te mostrará más datos climáticos. Tambien puedes iniciar sesión para guardar tus preferencias (esta parte en desarrollo).</p>
    </div>
  );
}

export default Welcome;