import React, { useState } from 'react';
import '../App.css';

function Counter({ initialCount }) {
    const [number, setNumber] = useState(initialCount);
  
    const incrementCounter = () => {
      setNumber(number + 1);
    }
  
    const decrementCounter = () => {
      setNumber(number - 1);
    }
  
    const resetCounter = () => {
      setNumber(0);
    }

    const switchSigns = () => {
        setNumber(-(number))
    }
  
    return (
      <div className="App">
        <h1 className='header'>React Counter</h1>
        <p className='value' data-testid="counter">{number}</p>
  
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={resetCounter}>Reset to 0</button>
        <button onClick={switchSigns}>Switch Signs</button>

        <p className='testcase-header'>To view test cases, look for "Counter.test.js"</p>
      </div>
    );
}
  
export default Counter;
  