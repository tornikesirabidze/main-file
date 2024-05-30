import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './List'

function App() {
  const fruits =[{id:1,name:"apple",calories: 98}
                ,{id:2,name:"banana",calories: 59}
                ,{id:3,name:"orange",calories: 22}
                ,{id:4,name:"pineaple",calories: 108}
]
const vegetable =[{id:5,name:"potatoes",calories: 98}
                ,{id:6,name:"celery",calories: 59}
                ,{id:7,name:"carots",calories: 22}
                ,{id:8,name:"corn",calories: 108}
]


  return (
    <>
      <List items={fruits} category="fruitss" />
      <List items={vegetable} category="vegetable" />
    </>
  )
}

export default App
