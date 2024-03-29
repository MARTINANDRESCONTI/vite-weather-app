import React from 'react'


import CityListed from './CityListed'
import style from './CityList.module.css'

export default function CityList( { citiesArray, deleteCity }) {
 
  const cityArray = citiesArray.map((e) =>{
        return (            
          <CityListed 
            key = {e.id}
            id = {e.id}
            name = {e.name}
            min = {e.min}
            max = {e.max}
            deleteCity={() => deleteCity(e.id)}   
          />      
        )})    
  return (
    <div className={style.listcontainer}>
      <ul className={style.list}>
        {cityArray}        
      </ul>  
    </div>
  )
}
