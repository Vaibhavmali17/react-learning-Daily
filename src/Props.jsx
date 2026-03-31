import React from 'react'
import propstyle from './propStyle.module.css'
// props is keyword or parameter use in child comp.
// const Props = (props) => {
    const Props = ({sub, Tname, Eid ,Hobbies}) => {
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
        </section>
    </div>
  )
}

export default Props