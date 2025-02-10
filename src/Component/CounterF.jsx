import { useEffect, useState } from "react";

const CounterF = ({ step = 1 }) => {
    console.log("CounterF: Render");
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000)
        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
        console.log("Component Did Update");
    }, [count])

    const handleClick = () => setCount((prev) => step + prev);
    const handleDecrement = () => setCount((prev) => prev -  step);
    const reset = () => setCount((prev) => 0);
    return (
        <>
            {
                loading ? <h1>Loading...</h1> : 
            <>
            <button onClick={handleDecrement}>Decrementer</button>
            <p>Count = {count}</p>
            <button onClick={handleClick}>Incrementer</button>
            <button onClick={reset}>reset</button>
        </>
            }
        </>
    );
};
export default CounterF;