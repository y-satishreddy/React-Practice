import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent'
import ClassComponent from './ClassComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MyComponent name="Nothing 2A"/>
     <ClassComponent/>
     <MyComponent name="Apple"/>
    </>
  )
}

export default App
