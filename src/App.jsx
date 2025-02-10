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
function App() {
  const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const [name, setName] = useState("Jihed");
    const handleClick = () => setCount((count) => count + 1);
  return (
    <>
 
    <Header name={name} />
  

    
    <CounterC counter={10} />
            <br />
            <input
                type="number"
                value={step}
                onChange={(e) => setStep(e.target.value)}
            />
            <br />
            <CounterF step={step} />
            <br />
            <br />
            <Ex2 initialItems={["React", "Angular", "Vue"]} />
            <br />
            <br />

            <ColorBox/>
            <br />
            <Notes/>
            <br />
            <TodoList/>
            <br/>
            <br />
            <Pokemon />
    </>
  )
}

export default App
