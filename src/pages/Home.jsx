import React from 'react'

import style from './Home.module.css'

export default function Home() {
  return (
    <div className={style.container}>
      <h3 className={style.title}>Welcome</h3>
      <br></br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia necessitatibus excepturi impedit cum. Eius saepe, aliquam deleniti et, repellendus nihil exercitationem debitis sed molestiae quidem quis, ipsam cumque velit laborum?</p>
      <br></br>
      <h2>
        Select the option "Search-city" to look for the wheather in the city of your choise.      
      </h2>
    </div>
  )
}
