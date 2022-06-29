import SearchBar from "./SearchBar"

function Nav(props) {
  return (
    <div>
      <span>Weather App | Anderson Marín</span>
      <SearchBar onSearch={props.onSearch}/>
    </div>
  );
}

export default Nav;