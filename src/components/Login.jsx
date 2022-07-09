import React from 'react';
import style from './Login.module.css'

function Login() {
  const [input, setInput] = React.useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = React.useState('');

  function validate(input){
    let errors = {}
    if(!input.email) {
      errors.email = 'Escriba un email válido';
    } else if(!/\S+@\S+\.\S+/.test(input.email)) {
      errors.email = 'Email invalido'
    }
    if(!input.password) {
      errors.password = 'Escriba una contraseña válida';
    } else if(!/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,16}$/.test(input.password)) {
      errors.password = 'Contraseña invalida'
    }

    return errors;
  }

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit(e){
    e.preventDefault();
    alert('Inición sesión correctamente');
  }

  function classSelector(valor) {
    if (valor) {
      return `${style.input} ${style.danger}`;
    } else {
      return style.input;
    }
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h1 className={style.h1}>Inicia sesión en <span  className={style.logo}>The Weather App</span>!</h1>
      <div className={style.div}>
        <label className={style.label} htmlFor="email">Correo: </label>
        <p className={style.error}>{errors.email ? errors.email : ''}</p>
      </div>
      <input className={style.input} type="email" name="email" value={input.email} onChange={handleInputChange}></input>
      
      <div className={style.div}>
        <label className={style.label} htmlFor="password">Contraseña: </label>
        <p className={style.error}>{errors.password ? errors.password : ''}</p>
      </div>
      <input className={classSelector(errors.password)} type="password" name="password" value={input.password} onChange={handleInputChange}></input>
      <input className={style.button} disabled={errors.email || errors.password || input.email === '' || input.password === '' ? true : ''} type="submit" value="Login"></input>
    </form>
  );
}

export default Login;