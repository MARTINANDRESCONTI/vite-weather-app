const apiKey = import.meta.env.VITE_API_KEY

export default function fetchApi (inputCity,citiesArray, setCitiesArray){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    // .then((res) => {        
    //   if(res.main !== undefined){ 
    //     const elem = {
    //       name: res.name,
    //       min: Math.round(res.main.temp_min),
    //       max: Math.round(res.main.temp_max),
    //       img: res.weather[0].icon,
    //       id: res.id,
    //       wind: res.wind.speed,
    //       temp: res.main.temp,
    //       humidity: res.main.humidity,
    //       weather: res.weather[0].icon,
    //       description: res.weather[0].description,
    //       clouds: res.clouds.all,
    //       latitud: res.coord.lat,
    //       longitud: res.coord.lon,  
    //       country: res.sys.country        
    //     }
    //     console.log(res)
    //     setCitiesArray(oldCities => [elem, ...oldCities]);         
    //   } else {
    //     alert("Ciudad no encontrada");
    //   }
    // })
    .then((res) => {        
      if(res.main !== undefined){ 
        const elem = {
          name: res.name,
          min: Math.round(res.main.temp_min),
          max: Math.round(res.main.temp_max),
          img: res.weather[0].icon,
          id: res.id,
          wind: res.wind.speed,
          temp: res.main.temp,
          humidity: res.main.humidity,
          weather: res.weather[0].icon,
          description: res.weather[0].description,
          clouds: res.clouds.all,
          latitud: res.coord.lat,
          longitud: res.coord.lon,  
          country: res.sys.country        
        }
        console.log(res)         
        setCitiesArray(citiesArray.filter(e => e.id !==res.id))
        setCitiesArray(oldCities => [elem, ...oldCities]);                  
      } else {
        alert("Ciudad no encontrada");
      }
    })
}

