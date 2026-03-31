import React from 'react'
import propstyle from './propStyle.module.css'
// props is keyword or parameter use in child comp.
// const Props = (props) => {
    const Props = ({sub, Tname, Eid ,Hobbies, result, address}) => {
    // let propStyle = {
    //     backgroundColor : "green" ,
    //     color :  "yellow",
    // //    borderColor: " 4px red",
    //     width : 300,
    //     padding : 20,
    //     textAlign : "center",
    //     borderRadius : 10,
    //     borderColor : "Black"
    // }
  return (
    <div>
        <section className={propstyle.card}>
            {/* <h1>{props.sub}</h1>  */}
            <h1>{sub}</h1>
        <h3> Traniner : {Tname}</h3> 
        <h4>id : {Eid}</h4>

        {/* array datatype */}
        <h2>Hobbies : </h2>
        <ul type="square">{Hobbies?. map((ele)=>{
            return <li>{ele}</li>
        })}
        </ul>
        {/* boolean datatype  */}
        {/* condition ? "stmt 1" : "stmt 2" */}
        <h4>Is Pass : {result ? "pass" : "fail" }</h4>

        {/* object datatype  */}
          <h5>Address : {address.dist} , {address.state}</h5>

        </section>
    </div>
  )
}

export default Props