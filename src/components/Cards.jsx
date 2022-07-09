import React from 'react'
import Card from "./Card"
import styles from './Cards.module.css'
import Welcome from './Welcome'

function Cards(data) {

  if(data.cities.length !== 0){
    console.log(data.cities)
    return (
      <div className={styles.cards}>
        {
          data.cities.map(ciudad =>
            <Card 
              key = {ciudad.id}
              min = {ciudad.min}
              max = {ciudad.max}
              name = {ciudad.name}
              img = {ciudad.img}
              id = {ciudad.id}
              onClose = {() => data.onClose(ciudad.id)}
            />
          )
        }
      </div>
    );
  } else {
    return(
      <div>
        <Welcome />
      </div>
    )
  }
}

export default Cards;