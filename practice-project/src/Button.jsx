import React from "react";
import Button2 from "./Button2.jsx";
// global css using App.css import for h1 tag 
// import "./App.css"    

const Button =()=>{
    // logic part
    let btnStyle = {
        backgroundColor : "green",
        color : " white"
    }
    return(
        <div>
            {/* inline css */}
            <button style={{ backgroundColor : "aqua", color : "red", margin : 2 , padding : 4}}>
                Order Now
            </button>

            {/* Object css */}
            <button style={btnStyle}>Buy Now</button>

            {/* <h1>Surya kumar</h1>  */}
            <Button2/>
        </div>
    )
}
export default Button