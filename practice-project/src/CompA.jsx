import React, { createContext, useState } from 'react'
import CompB from './CompB'
export let MyContext = createContext()

const CompA = () => {
    let [Movies, setMovies] = useState([
        "salar", "KGF","KGF2", "Eko"
    ])
    let girlMovies = ["chhava", "hoppers","sholey"]
    let marathiMovies = ["jhapatlela","vastav","agnipath", "Strainger Things"]
  return (
    // <div className='box'>
    //     <h1>Component 1</h1>
    //     <h2>{`hello ${user}`}</h2>
    //     <CompB data={user}/>
    // </div>
    <div className='box'>
        <h1>Component 1</h1>
        <MyContext.Provider value={[Movies,girlMovies,marathiMovies]}>
            <CompB/>
        </MyContext.Provider>
         {/* <MyContext.Provider value={mar}>
            <CompB/>
        </MyContext.Provider> */}
    </div>
  )
}

export default CompA