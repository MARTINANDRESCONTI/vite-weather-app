import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function City(props) { 
    const { city } = useParams()  
  return (
    <div>    
      <Link to='details'>Go to {city} details</Link>
    </div>
  )  
}
