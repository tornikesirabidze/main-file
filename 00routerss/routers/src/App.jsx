import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Destination from './components/Destination'
import Crew from './components/Crew'
import Technology from './components/Technology'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </div>
  )
}

export default App
