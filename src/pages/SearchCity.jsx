import React from 'react'
import { FaSearch, FaTimes } from "react-icons/fa";

import style from './SearchCity.module.css'
import CitySearched from '../components/CitySearched'

import cities from '../data';

export default function SearchCity() {
  const e = cities[0]
  return (
    <div className={style.container}>
      <div className={style.containerheader}>
        <h3 className={style.title}>Weather</h3>
        <form className={style.labinputcontainer}>
          <div className={style.iconsearch}><FaSearch /></div>
          <input className={style.input} type='text' name='City' placeholder='introduce your city' required />
          <div className={style.icondelete}><FaTimes /></div>
        </form>
      </div>
      <div className={style.citysearched}>
        <CitySearched
          name = {e.name}
          country = {e.sys.country}
          max = {e.main.temp_max} 
          min = {e.main.temp_min}  
          img = {e.weather[0].icon} 
          />
      </div>
    </div>    
  )
}
