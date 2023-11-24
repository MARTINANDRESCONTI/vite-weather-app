import React from 'react'

// import cities from '../data'
import CityListed from './CityListed'

export default function CityList( { citiesArray, deleteCity }) {
  
  const cityArray = citiesArray.map(e =>{
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
    <div>
      <ul>
        {cityArray}        
      </ul>  
    </div>
  )
}
