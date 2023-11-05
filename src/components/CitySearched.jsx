import React from 'react'

import style from './CitySearched.module.css'

export default function CitySearched(props) {
  return (
    <div className={style.container}>
      <div className={style.titleandcountry}>
        <h2 className={style.title}>{props.name}</h2>
        <h3 className={style.country}>{props.country}</h3>
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
