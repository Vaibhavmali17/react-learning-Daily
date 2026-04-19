import React from 'react'
import useCount from './useCount.jsx'

const CountOne = () => {
    let [count , increment,decrement,reset] = useCount()
  return (

    <div>
       <div>
        <h1>{count}</h1>
        <button onClick= {increment}>increment</button>
        <button onClick= {decrement}>decrement</button>
        <button onClick= {reset}>reset</button>
        </div> 
    </div>
  )
}

export default CountOne
