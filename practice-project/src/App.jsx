import React from 'react'
// import List from './List.jsx'
// import Button from './Button.jsx'
import Props from './Props.jsx'
import UsefullProp from './usefullProp.jsx'
import { imgOne, paraOne } from './ListData.js'

const App = () => {
  // function msgforhim (ele){
  //   return "hello sir , you are the best "+ ele
  // }
  return (
    <div>
      {/* <Button/> */}
      {/* <List/> */}

       {/* <section style={{height: "100px", width: "100%" , display : "flex"}}> */}
      {/* <Props Eid ={1230} sub = "React" Tname ="Rohit sir" Hobbies={["dance","signing"]} result={true} address={{dist :"pune", state :"maharashtra"}} msg={msgforhim("trainer")}/> 
      <Props Eid ={4433} sub = "java" Tname ="Avinash sir"Hobbies={["dance","signing"]}  result={false} address={{dist :"nashik", state :"maharashtra"}}msg={msgforhim("sir")}/>
      <Props Eid ={7624} sub = "webtech" Tname ="Rohit sir"Hobbies={["dance","signing"]} result={true} address={{dist :"ahmdabad", state :"gujrat"}}msg={msgforhim( "teacher")}/> */}
      {/* <Props Eid ={3242} sub = "python" Tname ="mohit sir" Hobbies={["dance","signing"]}/>
      <Props Eid ={1121} sub = "SQL" Tname ="pradip sir" Hobbies={["dance","signing"]}/> */}
 {/* </section> */}
        {/* <PropUseFull/> */}

        <UsefullProp>
          <img src={imgOne} alt="" height={120} style={{float : "left"}} />
          <p>{paraOne}</p>
        </UsefullProp>
     


    </div>
  )
}

export default App
