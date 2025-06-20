import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [inputText, setInputText] = useState("");

    return (
        <div>
            <h1>Current Value of Count: {count}</h1>
            <button onClick={() => setCount(count + 1)} className='bg-red-300 mx-4'>
                Increase
            </button>
            <button onClick={() => setCount(count - 1)} className='bg-red-300 mx-4'>
                Decrease
            </button>
            <button onClick={() => setCount(0)} className='bg-red-300 mx-4'>
                Reset
            </button>
            Hello, {inputText} <br />
            <input 
                type='text' 
                onChange={(e) => setInputText(e.target.value)} 
                className='border p-1' 
                placeholder='Enter your name'
            />
            <p></p>
        </div>
    );
};

export default Counter;
