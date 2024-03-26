import { useState } from "react";
import './counter.css';
const Counter = (props) => {
    console.log(props);
    const [count, setCount] = useState(props.initial);
    const increment = (event) => {
        setCount(count + 1);
    }

    const decrement = (event) => {
        setCount(count - 1);
    }
    return (
        <>
            <button onClick={increment}>+</button>
            <p>Counter value: {count}</p>
            <button onClick={decrement}>-</button>
        </>
    )
};

export default Counter;