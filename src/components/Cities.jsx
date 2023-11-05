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
        </li>
      </ul>      
    )
  })
  return (
    <div>  
      <div>
        {citiesCard}
      </div>
  
    </div>
  )
}