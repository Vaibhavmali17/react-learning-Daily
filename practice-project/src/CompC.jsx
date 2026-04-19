import React from 'react'
import CompD from './CompD'
import { MyContext } from './CompA'

const CompC = () => {
    let user = useContext(MyContext) 
  return (
    <div className='box'>
        <h1>Component 3</h1>
         {user.marathiMovies.map((ele,index)=>{
            return <li key={index}>{ele}</li>
        })}
        <CompD/>
    </div>
  )
}

export default CompC