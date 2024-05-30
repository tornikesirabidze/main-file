import React from 'react'
import { acces } from "../assets"
import { security } from "../assets"
import { collaboration } from "../assets"
import { file } from '../assets'
import "../index.css"
function Content() {
  return (
    <div className='contentmain'>
      <div>
        <div className='contdiv'>
          <img src={acces} alt="" />
          <h2>Access your files, anywhere</h2>
          <p>  The ability to use a smartphone, tablet, or computer to access your account means your
            files follow you everywhere.</p>

        </div>
        <div className='contdiv'>
          <img src={collaboration} alt="" />
          <h2>Real-time collaboration</h2>
          <p>Securely share files and folders with friends, family and colleagues for live collaboration.
            No email attachments required.</p>
        </div>
      </div>

      <div className='cont2'>
        <div className='contdiv1'>
          <img src={security} alt="" />
          <h2>Security you can trust</h2>
          <p> 2-factor authentication and user-controlled encryption are just a couple of the security
            features we allow to help secure your files.</p>


        </div>
        <div className='contdiv'>
          <img src={file}></img>
          <h2>Store any type of file</h2>
          <p>  Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all
            file types to be securely stored and shared.</p>

        </div>


      </div>

    </div>
  )
}

export default Content
