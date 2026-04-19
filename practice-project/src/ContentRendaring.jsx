import React, { useState } from "react";

const ContentRendaring =() =>{
    // let [data,newData] = useState("")
    let msg;
    let age=20;
    if(age>20){
        msg =" eligible for vote"
    }
    else{
        msg = "not eligible for vote"
    }
  return (
    <div>
        <h1>{msg}</h1>
    </div>
  )
}
export default ContentRendaring