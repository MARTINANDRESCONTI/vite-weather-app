import React from 'react'
import { Link } from 'react-router-dom'

import style from './CityListed.module.css'

export default function CityListed(props) {
  return (    
    <li className ={style.li} key={props.id}>
      <Link className={style.city} to={`/cities/${props.name}`}>
        {props.name}
      </Link>
      <div>
        <h3>Min :</h3>   
        <p>{props.min}</p>
      </div>
      <div>
        <h3>Max :</h3>
        <p>{props.max}</p>
      </div>
      <button className={style.button}>X</button>                 
    </li>

    
    
  )
}
