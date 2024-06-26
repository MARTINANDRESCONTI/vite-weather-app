import React from 'react'
import { useParams, Link } from 'react-router-dom'

import style from './City.module.css'


export default function City( { citiesArray } ) { 
    const { city } = useParams()  
    const ct = citiesArray[0]
  return (
    <div className={style.container}> 
      <div className={style.header}>
        <h3 className={style.title}>{ct.name}</h3>
        <p>{ct.country}</p>      
      </div> 
      <div className={style.bodycontainer}>
        <div className={style.body}>
          <div className={style.iconcontainer}>
            <img className={style.icon} src={`http://openweathermap.org/img/wn/${ct.img}@2x.png`} alt='icon'/>
          </div>
          <div className={style.tempcontainer}>
            <p>Temperture: {ct.temp}°</p>
            <p>Min: {ct.min}°</p>
            <p>Max: {ct.max}°</p>
            <p>Humidity{ct.humidity}%</p>
          </div>
        </div>  
        <p className={style.description}>{ct.description.replace(ct.description[0],ct.description[0].toUpperCase())}</p>
      </div>
      <Link to='/search-city' className={style.link}>Return to search</Link>
     
    </div>
  )  
}
