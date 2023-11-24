import React from 'react'
import { TbBrandVite } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";


import style from './Home.module.css'

export default function Home() {
  return (
    <div className={style.container}>
      <div>
        <h3 className={style.title}>Welcome</h3>
      </div>
      <div className={style.body}>
        <p className={style.p}>
          Hi! This is a weather app using <TbBrandVite /> <FaReact />  <IoLogoJavascript />.
        </p>
        <br></br>
        <h3>
          Search the city's weather of your choise.      
        </h3>
      </div>      
    </div>
  )
}
