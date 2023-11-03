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
    <div>
      <header className={style.header}> 
        <div className={style.title}>
          <h1>Wheather App with Vite </h1>      
          <img src={martinIcon} alt="Logo" />
        </div> 
        <nav>
        <ul className={style.ul}>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/search-city'>Search City</NavLink></li>
          <li><NavLink to='/cities'>Cities</NavLink></li>  
                  
        </ul>
        </nav>      
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-city' element={< SearchBar />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='/cities/:city' element={<City/>} >
          <Route path='details' element={<CityDetails/>} />
        </Route>
      
      </Routes>     
    </div>
    
  )
}

export default App
