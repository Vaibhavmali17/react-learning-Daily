import React from 'react'
import { Children } from 'react'

const UsefullProp = ({children}) => {
    let styleProp = {
         padding : 10,
         border : "2px solid black",
         height : 200,
    }
  return (
    <div>
        {/* <section style={styleprop}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsbmTZu_uMrmJ0z--CrG-o1UIXytu1OCizQ&s" alt="" style={{ float: "left" , margin: "auto" }}/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto earum dicta est, provident accusantium tenetur sapiente! Amet impedit beatae, itaque ad cum quisquam laborum, ipsam quis commodi perferendis optio aliquam!</p>
        </section> */}

        <section style={styleProp}>
            {children}
        </section>
    </div>
  )
}

export default UsefullProp