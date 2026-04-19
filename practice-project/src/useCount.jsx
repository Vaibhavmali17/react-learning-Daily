import React, { useState } from 'react'

const useCount = () => {
    let [count , setCount] = useState(0)

    function increment (){
        setCount(count + 1)
    }
     function decrement (){
        setCount(count - 1)
    }
     function reset (){
        setCount(count = 0)
    }
  return [count,increment,decrement,reset]
}

export default useCount