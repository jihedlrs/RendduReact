import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header' 
import "./Header.css"; 
import "./Footer.css"; 
import Footer from './Component/Footer'
import CounterC from './Component/CounterC'
import CounterF from './Component/CounterF'
import Pokemon from './Component/Pokemon'
import Ex2 from './Component/EX2'
import ColorBox from './Component/ColorBox'
import Notes from './Component/Notes'
import TodoList from './Component/TodoList'
import Events from './Component/Events'
function App() {
  const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const [name, setName] = useState("Jihed");
    const handleClick = () => setCount((count) => count + 1);
  return (
    <>
 
    
    <Events/>
    </>
  )
}

export default App
