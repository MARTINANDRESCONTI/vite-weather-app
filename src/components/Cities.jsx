import React from 'react'
import { Link } from 'react-router-dom'

import cities from '../data'
import City from './City'

export default function Cities() {
  const citiesCard = cities.map(e => {
    return (
      <ul>
        <li key={e.id}>
          <Link to={`/cities/${e.name}`}>
            {e.name}
          </Link> 
          {/* <City 
          name = {e.name}
          max = {e.temp_max} 
          min = {e.temp_min}  
          /> */}
        </li>
      </ul>
      // <div style={{display : 'flex'} }>
      //   <Link to={`/cities/${e.name}`}>
      //     {e.name}
      //   </Link> 
      //   <City 
      //     // name = {e.name}
      //     max = {e.main.temp_max} 
      //     min = {e.main.temp_min}  
      //   />

      // </div>
    )
  }

  )
  return (
    <div>  
      <div>
        {citiesCard}
      </div>
      {/* <div>
        <ul>
          {cities.map(city => (
            <li key={city.id}>
             
              <Link to={`/cities/${city.name}`}>
                {city.name}{city.id}
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  )
}