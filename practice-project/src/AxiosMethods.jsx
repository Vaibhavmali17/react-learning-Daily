import axios from 'axios'
import React, { useState } from 'react'

const AxiosMethods = () => {
    let [data, setData] = useState({
        username : "",
        password : ""
    })

    let {username , password} = data

    let handlerForm = (e)=>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    let handlerSubmit = (event)=>{
        event.preventDefault()
        console.log(data);
        axios.post("https://jsonplaceholder.typicode.com/users",data)
        .then((Response)=>{
            console.log(Response);
        })//.catch((error)=>{
        //     console.log(error);
        //     console.error(error);
        // })  
    }

     let handlerUpdate = (event)=>{
        event.preventDefault()
        console.log(data);
        axios.put("https://jsonplaceholder.typicode.com/users",data)
        .then((Response)=>{
            console.log(Response);
         })//.catch((error)=>{
        //     console.log(error);
        //     console.error(error);
        // })  
    }

     let handlerDelete = (event)=>{
        event.preventDefault()
        // console.log(data);
        axios.delete("https://jsonplaceholder.typicode.com/users/1")
        console.log("delete the data");
        
    }
  return (
    <div>
      
      <form action="">
        <input name='username' value={username} onChange={handlerForm} type="text" placeholder='username' /> <br />
        <input name='password' value={password} onChange={handlerForm} type="password" placeholder='password' /><br />
        <button onClick={handlerSubmit}>submit</button>
        <button onClick={handlerUpdate}>update</button>
        <button onClick={handlerDelete}>delete</button>

      </form>
    </div>
  )
}

export default AxiosMethods
