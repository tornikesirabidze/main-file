import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Students from './Students'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Students name="tornike" lastname="sirabidze" age="21"  Students={false}/>
    <Students name="boogy" lastname="kakarot" age="33"  Students={false}/>
    </>
  )
}

export default App
