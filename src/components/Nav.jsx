import SearchBar from "./SearchBar"
import style from "./Nav.module.css"
import logo from "../logo.png"

function Nav(props) {
  return (
    <div className={style.nav}>
      <div className={style.div}>
        <img src={logo} alt="logo"></img>
        <span className={style.text}>Weather App | Anderson Marín</span>
      </div>
      <SearchBar onSearch={props.onSearch}/>
    </div>
  );
}

export default Nav;