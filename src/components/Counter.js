import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0)
    const [disabled, setDisabled] = useState(false)


    function increment() {
        setCount(count + 1)
        if (count >= 0) {
            setDisabled(false)

        }
    }
    function decrement() {
        setCount(count - 1)

        if (count <= 1) {
            setDisabled(true)

        }
    }

    return (
        <>
            <div className="App">
                <h1>Counter Components</h1><br />
                <h2> {count}</h2>
                <button disabled={disabled} onClick={decrement} className='btn btn-warning'>Decrement</button>
                <button onClick={increment} className='btn btn-warning m-3'>Increment</button>


            </div>
        </>
    )
}
