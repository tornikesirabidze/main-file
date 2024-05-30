import React from 'react'
import "../index.css"
import { profilone } from "../assets"
import { profiletwo } from "../assets"
import { profilethird } from "../assets"

function Contact() {
    return (
        <div className='contactmain'>
            <div className='contmain2'>
                <div className='cotact1'>
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                        become a well-oiled collaboration machine.</p>
                    <div className='contact2'>
                        <img className='contimg' src={profilone} alt="" />
                        <div className='contact3'>
                            <h4>Satish Patel</h4>
                            <p>Founder & CEO, Huddle</p>

                        </div>
                    </div>
                </div>
            </div>

            {/* //// */}

            <div className='contmain2'>
                <div className='cotact1'>
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                        become a well-oiled collaboration machine.</p>
                    <div className='contact2'>
                        <img className='contimg' src={profiletwo} alt="" />
                        <div className='contact3'>
                            <h4>Bruce McKenzie</h4>
                            <p>Founder & CEO, Huddle</p>

                        </div>
                    </div>
                </div>
            </div>


            {/* //// */}


            <div className='contmain2'>
                <div className='cotact1'>
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                        become a well-oiled collaboration machine.</p>
                    <div className='contact2'>
                        <img className='contimg' src={profilethird} alt="" />
                        <div className='contact3'>
                            <h4>Iva Boyd</h4>
                            <p>Founder & CEO, Huddle</p>

                        </div>
                    </div>
                </div>
            </div>



        </div>

        
        ////

        
        
    )
}

export default Contact
