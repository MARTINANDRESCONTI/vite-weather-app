import React from 'react'
import { FaSearch, FaTimes } from "react-icons/fa";

// import fetchApi from '../services/GlobalApi';
import { useState } from "react";
import style from './SearchBar.module.css'

export default function SearchBar({fetchCity}) {

  const [inputCity, setInputCity] = useState('')

    function handleChange (event) {
    return setInputCity(event.target.value)
  } 
  
    function clearInput () {
    setInputCity('')
  }

  return (
    <div>
      <form className={style.labinputcontainer} onSubmit={(e)=>{
        e.preventDefault();
        fetchCity(inputCity)
        setInputCity('')
      }
      }>
          <button className={style.iconsearch} >
            <FaSearch />
          </button>
          <input 
            className={style.input} 
            type='text' name='City' 
            placeholder='introduce your city' 
            onChange={handleChange}
            value={inputCity}
            autoComplete='off'
            required 
          />
          <div className={style.icondelete} onClick={clearInput}><FaTimes /></div>
        </form>
    </div>
  )
}
