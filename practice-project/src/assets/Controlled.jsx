import React, { useState } from 'react'

const Controlled = () => {
    let [user,setUser]=useState("Pannu")
    let [email,setEmail]=useState("")
    function userChange(event) {
        setUser(event.target.value)
    }
    function handleform(event) {
        event.preventDefault()
        console.log("handling form");
        console.log(user);
        console.log(email);
        
    }
  return (
    <div>
        <form action="" onSubmit={handleform}>
            <input type="text" onChange={userChange} value={user}/>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Controlled