import React, { useEffect, useState } from 'react'

import style from './SearchCity.module.css'
import CitySearched from '../components/CitySearched'
import SearchBar from '../components/SearchBar'

export default function SearchCity({ fetchCity, citiesArray }) {  
  return (
    <div className={style.container}>
      <div className={style.containerheader}>
        <h3 className={style.title}>Weather</h3>
        <SearchBar fetchCity={fetchCity}/>
      </div>
      <div className={style.citysearched}>
        {citiesArray.length > 0 ? <CitySearched
          name = {citiesArray[0].name}
          max = {citiesArray[0].max} 
          min = {citiesArray[0].min}  
          img = {citiesArray[0].img} 
          /> : <div className={style.transparent}></div>}
      </div>
    </div>    
  
  )
}
