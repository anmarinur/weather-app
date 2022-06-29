import SearchBar from "./SearchBar"
import style from "./Nav.module.css"

function Nav(props) {
  return (
    <div className={style.nav}>
      <span>Weather App | Anderson Marín</span>
      <SearchBar onSearch={props.onSearch}/>
    </div>
  );
}

export default Nav;