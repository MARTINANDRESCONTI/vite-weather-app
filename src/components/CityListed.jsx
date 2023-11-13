import React from 'react'


import style from './CityListed.module.css'

export default function CityListed(props) {
  return (    
    <li className ={style.li} key={props.id}>
      <h2 className={style.city} >
        {props.name}
      </h2>
      {/* <div>
        <h3>Min :</h3>   
        <p>{props.min}</p>
      </div>
      <div>
        <h3>Max :</h3>
        <p>{props.max}</p>
      </div> */}
      <button className={style.button}>X</button>                 
    </li>

    
    
  )
}
