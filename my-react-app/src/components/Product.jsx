import React from 'react'
import "../index.css"
import { productive } from "../assets"

function Product() {
    return (
        <div className='productmain'>
            <div className='product1'>
                <img className='productimg' src={productive} alt="" />
            </div>
            <div className='product2'>
                <h1>Stay productive,<br /> wherever you are</h1>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                    storage needs.</p>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email
                    attachments required.</p>
                <p className='fylo'>See how Fylo works</p>
                <hr />
            </div>

        </div>
    )
}

export default Product
