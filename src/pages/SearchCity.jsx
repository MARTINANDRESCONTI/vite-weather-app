import React, { useState } from 'react'

import style from './SearchCity.module.css'
import CitySearched from '../components/CitySearched'
import SearchBar from '../components/SearchBar'
// import fetchApi from '../services/GlobalApi';

const apiKey = import.meta.env.VITE_API_KEY

export default function SearchCity() {  

  const [citiesArray, setCitiesArray] = useState([])

  function fetchCity (inputCity) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then((res) => {        
        if(res){
          const elem = {
            name: res.name,
            min: Math.round(res.main.temp_min),
            max: Math.round(res.main.temp_max),
            img: res.weather[0].icon,
            id: res.id,
            wind: res.wind.speed,
            temp: res.main.temp,
            weather: res.weather[0].icon,
            description: res.weather[0].description,
            clouds: res.clouds.all,
            latitud: res.coord.lat,
            longitud: res.coord.lon          
          }
          console.log(elem)
          setCitiesArray(oldCities => [elem, ...oldCities]);
                  
        } else {
          alert("Ciudad no encontrada");
        }
      }
    )
  } 

  return (
    <div className={style.container}>
      <div className={style.containerheader}>
        <h3 className={style.title}>Weather</h3>
        <SearchBar fetchCity={fetchCity}/>
      </div>
      <div className={style.citysearched}>
        {citiesArray.length !== 0 ? <CitySearched
          name = {citiesArray[0].name}
          max = {citiesArray[0].max} 
          min = {citiesArray[0].min}  
          img = {citiesArray[0].img} 
          /> : <div className={style.transparent}></div>}
      </div>
    </div>    
  
  )
}
