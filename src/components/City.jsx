import React from 'react'
import { useParams, Link } from 'react-router-dom'


export default function City( { citiesArray } ) { 
    const { city } = useParams()  
    console.log(citiesArray)
    
  return (
    <div>    
      <Link to='/search-city'>Return to search</Link>
      <h3>{citiesArray[0].name}</h3>
     
    </div>
  )  
}
