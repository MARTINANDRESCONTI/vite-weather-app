import React from 'react'
import { Link } from 'react-router-dom'

const cityArray = [
  'Mendoza',
  'Mar del Plata',
  'Cordoba'
]

export default function Cities() {
  return (
    <div>
      {cityArray.map(city => (
      <ul>
        <li>
          <Link key={city} to={`/cities/${city}`}>
            {city}
          </Link>
        </li>
      </ul>
      ))}
    </div>
  )
}