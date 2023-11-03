import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function City() { 
    const { city } = useParams()  
  return (
    <div>
      <div>{city}</div>
      <Link to='details'>Go to {city} details </Link>
    </div>
  )  
}
