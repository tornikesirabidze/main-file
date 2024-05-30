import React from 'react'
import { email, logo, phone } from '../assets'
export { location } from '../assets'
export { phone } from '../assets'
export { email } from '../assets'
import "../index.css"


function Footer() {
    return (
        <div className='footermain'>
            <div className='foterdiv1'>
                <img src={logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua</p>
            </div>

            <div className='footermain2'>
                <div className='foterdiv2'>
                    <img src={phone} alt="" />
                    <p>+1-543-123-4567</p>
                </div>
                <div className='foterdiv3'>
                    <img src={email} alt="" />
                    <p>example@fylo.com</p>
                </div>
            </div>

            <div className='foterdiv4'>
                <p>About Us</p>
                <p>Jobs</p>
                <p>Press</p>
                <p>Blog</p>
            </div>
            
            <div className='foterdiv5'>
                <p>Contact Us</p>
                <p>Terms</p>
                <p>Privacy</p>

            </div>

        </div>
    )
}

export default Footer
