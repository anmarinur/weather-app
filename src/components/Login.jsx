

function Login() {
  return (
    <form>
      <div>
        <label htmlFor="email">Correo: </label>
        <input type="email" name="email"></input>
      </div>
      <div>
        <label htmlFor="password">Contraseña: </label>
        <input type="password" name="password"></input>
      </div>
      <input type="submit" value="Login"></input>
    </form>
  );
}

export default Login;