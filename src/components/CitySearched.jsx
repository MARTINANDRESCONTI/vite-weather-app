import React from 'react'
import { Link } from 'react-router-dom'

import style from './CitySearched.module.css'

export default function CitySearched(props) {
  return (
    <div className={style.container}>
      <div className={style.titleandcountry}>
        <h2 className={style.title}>{props.name}</h2>
        <Link className={style.button} to={`/search-city/${props.name}`}>
          <button className={style.button}>See details</button>
        </Link> 
      </div>
      <div className={style.tempicon}>
        <div className={style.temp}>
          <div className={style.min}>
            <h3>Min</h3>
            <p>{props.min}</p>
          </div>
          <div className={style.max}>
            <h3>Max</h3>
            <p>{props.max}</p>
          </div>
        </div>
        <img className={style.icon} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='icon'/>
      </div>
    </div>
  )
}
