import React from 'react'
// import { Link } from 'react-router-dom'

import cities from '../data'
import CityListed from './CityListed'

export default function CityList() {
  const cityArray = cities.map(e =>{
        return (            
          <CityListed 
            id = {e.id}
            name = {e.name}
            min = {e.main.temp_min}
            max = {e.main.temp_max}
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
