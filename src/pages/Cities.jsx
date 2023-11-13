import React from 'react'

import style from './Cities.module.css'
import CityList from '../components/CityList'

export default function Cities( { citiesArray } ) {
  
  return (
    <div className={style.container}> 
      <h2 className={style.title}>Lates cities searched</h2> 
      <div className={style.list}>
        <CityList citiesArray={citiesArray} />             
      </div>
  
    </div>
  )
}