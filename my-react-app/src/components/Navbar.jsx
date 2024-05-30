import React from 'react'
import { navLinks } from "../constants"
import { logo } from '../assets'
import "../index.css"
function Navbar() {
    return (
        <div className='mainlinks'>


            <div className='navlinks'>
                <div>
                    <img src={logo} className='navlogo'></img>

                </div>
                <div>
                    <ul className='navul'>

                        {navLinks.map((item, index) => (
                            <li key={index}>{item.contents}</li>
                        ))}
                    </ul>

                </div>

            </div>
        </div>


    )
}

export default Navbar
