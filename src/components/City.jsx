import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function City(props) { 
    const { city } = useParams()  
  return (
    <div>
      {/* <h2>{props.name}</h2> */}
      {/* <div>
        <p>
          {props.min}
        </p>
        <p>
          {props.max}
        </p>
      </div> */}
      <Link to='details'>Go to {city} details</Link>
    </div>
  )  
}
