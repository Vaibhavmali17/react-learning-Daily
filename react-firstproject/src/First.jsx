import React from 'react'
import Second from './Second.jsx'
import './App.css'

const First = () => {
    // logic part 
    // privious way of creating ele in react
    // let ele = React.createElement("h1",{id : "sub"}, "hello react !")

    // // new way of create react
    // let Name = <h1 id ="sub">hello jsx</h1>

    // let task= ()=>{
    //   alert("hello i clicked")
    // } 

  return (
    // <div>
    //   {/* <h1>hello my first componend</h1> */}
    //   {Name}
    //   <h3 onClick={task}>clcik on</h3>
    // </div>
    <div>
      {/* <h1 style={{color : 'red'}, {backgroundColor:'green'}}>hello</h1> */}
      <h1 style={ {backgroundColor:'green', color : "yellow"}}>hello</h1>
      <h2 className='actor'>akshay kumar</h2>2nd
      <Second/>
    </div>

  )
}

export default First