import martinIcon from '/martinIcon.svg'
import style from './App.module.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import Home from './pages/Home'
import Cities from './pages/Cities'
import City from './components/City'
import fetchApi from './services/GlobalApi';
import SearchCity from './pages/SearchCity'
import Footer from './components/Footer'

function App() {

  const [citiesArray, setCitiesArray] = useState([])
  
  function fetchCity (inputCity) {
    if(citiesArray.length > 7)setCitiesArray(old => old.pop()) 
    fetchApi(inputCity,citiesArray, setCitiesArray)} 

  function deleteCity (id) {
    setCitiesArray(old => old.filter(c=> c.id !== id))
  } 
  
  return (
    <div className={style.main}>      
      <header className={style.header}> 
        <div className={style.title}>
          <a className={style.icon} href='https://martin-conti-portfolio.vercel.app/' target='_blank'>
            <img className={style.logo} src={martinIcon} alt="Logo" />                          
          </a>
          <h1>Weather App</h1>      
        </div> 
        <nav>
          <div className={style.options}>
            <NavLink className={style.option} to='/'><div>Home</div></NavLink>
            <NavLink  className={style.option} to='/search-city'><div>Weather</div></NavLink>  
            <NavLink className={style.option} to='/cities'><div >Listed</div> </NavLink>
             
          </div>   
        </nav>      
      </header>
      <section className={style.body}>
        <div className={style.bkg}/>
          <div className={style.pagecontainer}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/search-city' 
                element={< SearchCity 
                setCitiesArray={setCitiesArray}
                fetchCity={fetchCity}
                citiesArray={citiesArray}
                />}
              />
              <Route path='/search-city/:city' 
                element={<City 
                  citiesArray={citiesArray}            
                />} >               
              </Route> 
              <Route path='/cities' 
                element={<Cities 
                  citiesArray={citiesArray} 
                  deleteCity={deleteCity}    
                />} />           
            </Routes>
          </div>        
      </section>
      <Footer />
    </div>    
   
    
  )
}

export default App
