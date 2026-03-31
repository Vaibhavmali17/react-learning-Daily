import React from 'react'
// import List from './List.jsx'
// import Button from './Button.jsx'
import Props from './Props.jsx'

const App = () => {
  return (
    <div>
      {/* <Button/> */}
      {/* <List/> */}

      <section style={{height: "100px", width: "100%" , display : "flex"}}>
      <Props Eid ={1230} sub = "React" Tname ="Rohit sir" Hobbies={["dance","signing"]} result={true} address={{dist :"pune", state :"maharashtra"}}/>
      <Props Eid ={4433} sub = "java" Tname ="Avinash sir"Hobbies={["dance","signing"]}  result={false} address={{dist :"nashik", state :"maharashtra"}}/>
      <Props Eid ={7624} sub = "webtech" Tname ="Rohit sir"Hobbies={["dance","signing"]} result={true} address={{dist :"ahmdabad", state :"gujrat"}}/>
      {/* <Props Eid ={3242} sub = "python" Tname ="mohit sir" Hobbies={["dance","signing"]}/>
      <Props Eid ={1121} sub = "SQL" Tname ="pradip sir" Hobbies={["dance","signing"]}/> */}
      </section>


    </div>
  )
}

export default App
