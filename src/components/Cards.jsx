import Card from "./Card"

function Cards(data) {
  return (
    <div>
      <Card 
        name = {data.cities[0].name}
        min = {data.cities[0].main.temp_min}
        max = {data.cities[0].main.temp_max}
        img = {data.cities[0].weather[0].icon}
      />
    </div>
  );
}

export default Cards;