import React from 'react';
import SearchBar from "./SearchBar"
import style from "./Nav.module.css"
import { Link } from 'react-router-dom'
 
function Nav(props) {
  return (
    <div className={style.nav}>
      <Link className={style.link} to="/">
        <div className={style.div}>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="4" />
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
          </svg>
          <span className={style.text}>The Weather App</span>
        </div>
      </Link>

      <div className={style.searchBar}>
        <SearchBar onSearch={props.onSearch}/>
      </div>

      <Link className={style.link} to="/about">
        <div className={style.span}>
          <span>About</span>
        </div>
      </Link>
    </div>
  );
}

export default Nav;