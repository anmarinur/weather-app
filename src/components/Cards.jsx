import React from 'react'
import Card from "./Card"

function Cards(data) {
  console.log(data)
  if(data.cities){
    return (
      <div>
        {
          data.cities.map(ciudad =>
            <Card 
              key = {ciudad.id}
              min = {ciudad.min}
              max = {ciudad.max}
              name = {ciudad.name}
              img = {ciudad.img}
              onClose = {() => data.onClose(ciudad.id)}
            />
          )
        }
      </div>
    );
  } else {
    return(
      <div>
        <h2>Sin ciudades</h2>
      </div>
    )
  }
}

export default Cards;