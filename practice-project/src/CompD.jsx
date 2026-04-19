import React, { useContext } from 'react'
import { MyContext } from './CompA'

const CompD = () => {
    // let user = useContext(MyContext)   //  for one data or array
    // destructuring
    let [dataOne,dataTwo] = useContext(MyContext)   //  use for multiple data 
  return (
    <div className='box'>
        <h1>Component 4</h1>
        <h2></h2>
        {dataOne.map((ele,index)=>{
            return <li key={index}>{ele}</li>
        })}
        <ol> {dataTwo.map((ele,index)=>{
            return <li key={index}>{ele}</li>
        })}</ol>
        
       
    </div>
  )
}

export default CompD