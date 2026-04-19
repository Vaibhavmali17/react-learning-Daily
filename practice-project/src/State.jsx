import React, { useState } from 'react'

const State = () => {
    let [count , setCount]=useState(0)
    let [name,setName]=useState("java")
    let [like,setLike]=useState(false)
    let [sub, newSub]=useState("marathi")
    function UpdateSub(){
        newSub("English")
    }
    function Increment(){
        setCount(count+1)
    }
    function Decrement(){
        setCount(count-1)
    }
    function Change(){
        setName("java Trainer")
    }
    function Likebtn(){
        setLike(!like)
    }
  return (
    <div>
        <h1 onClick={UpdateSub}>{sub}</h1>
        <h1>Hello im State : {count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <h2 onClick={Change}>{name}</h2>
        <button onClick={Likebtn}>{like ? "Liked❤️" : "Like🤍"}</button>
    </div>
  )
}

export default State