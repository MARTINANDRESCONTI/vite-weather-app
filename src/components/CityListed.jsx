import React from 'react'
import { FaTrashAlt } from "react-icons/fa"

import style from './CityListed.module.css'

export default function CityListed(props) {
  return (    
    <li className ={style.li} key={props.id}>
      <div>
        <h2 className={style.city} >
          {props.name}
        </h2>
      </div>
      <div className={style.data}>
        <div className={style.temp}>
          <h3>Min :</h3>   
          <p>{props.min}°</p>
        </div>
        <div className={style.temp}>
          <h3>Max :</h3>
          <p>{props.max}°</p>
        </div>
        <button className={style.button} onClick={props.deleteCity}><FaTrashAlt /></button>
      </div>
    </li>    
  )
}
