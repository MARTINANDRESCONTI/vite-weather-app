import React from 'react'

// import cities from '../data'
import CityListed from './CityListed'

export default function CityList( { citiesArray }) {
  const cityArray = citiesArray.map(e =>{
        return (            
          <CityListed 
            id = {e.id}
            name = {e.name}
            // min = {e.main.temp_min}
            // max = {e.main.temp_max}
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
