import React from 'react'
import { intro } from "../assets"
import "../index.css"

function Hero() {
  return (
    <div className='herodiv'>
      <div className="heroimg">
        <img src={intro} alt="" className='heroimg' />

      </div>
      <h1 > All your files in one secure location,
        accessible anywhere.</h1>
      <p>  Fylo stores all your most important files in one secure location. Access them wherever
        you need, share and collaborate with friends family, and co-workers.</p>

      <button className='herobtn'>Get Started</button>

    </div>
  )
}

export default Hero
