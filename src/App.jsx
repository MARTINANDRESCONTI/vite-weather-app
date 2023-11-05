import martinIcon from '/martinIcon.svg'
import style from './App.module.css'
import { NavLink, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import SearchBar from './components/SearchCity'
import Cities from './components/Cities'
import City from './components/City'
import CityDetails from './components/CityDetails'

function App() {
  
  return (
    <div className={style.main}>      
      <header className={style.header}> 
        <div className={style.title}>
          <h1>Weather App with Vite </h1>      
          <img className={style.logo} src={martinIcon} alt="Logo" />
        </div> 
        <nav>
        <div className={style.options}>
          <NavLink to='/'><button className={style.option}>Home</button></NavLink>
          <NavLink to='/search-city'><button className={style.option}>Search-city</button></NavLink>  
          <NavLink to='/cities'><button className={style.option}>Cities</button> </NavLink> 
        </div>
        
                  
        
        </nav>      
      </header>
      <section className={style.body}>
        <div className={style.bkg}/>
        <div className={style.pagecontainer}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search-city' element={< SearchBar />} />
            <Route path='/cities' element={<Cities />} />
            <Route path='/cities/:city' element={<City/>} >
              <Route path='details' element={<CityDetails/>} />
            </Route>        
          </Routes>
        </div>
        
      </section>
    </div>    
   
    
  )
}

export default App
