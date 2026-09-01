import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj  = {
    username: 'Saurabh',
    age: 21
  }
  let newArr = [1 , 2 , 3]

  return (
    <>
      <h1 className= "bg-green-400 text-black p-4 rounded-xl">Tailwind Props</h1>
      <Card username = "chaiaurcode" btnText = "Touch Me"/>
      <Card username = "Saurabh" btnText = "Click Me"/>


      
    </>
  )
}

export default App
