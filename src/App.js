import './App.css';
import Cards from "./components/Cards"
import data from "./data"

function App() {
  return (
    <div>
      <Cards cities={data}/>
    </div>
  );
}

export default App;
