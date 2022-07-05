import React from 'react';
import SearchBar from "./SearchBar"
import style from "./Nav.module.css"
import logo from "../logo.png"
import { Link } from 'react-router-dom'
 
function Nav(props) {
  return (
    <div className={style.nav}>
      <Link to="/">
        <div className={style.div}>
          <img src={logo} alt="logo"></img>
          <span className={style.text}>Weather App | Anderson Marín</span>
        </div>
      </Link>

      <SearchBar onSearch={props.onSearch}/>

      <Link to="/about">
        <div className={style.span}>
          <span>About</span>
        </div>
      </Link>
    </div>
  );
}

export default Nav;