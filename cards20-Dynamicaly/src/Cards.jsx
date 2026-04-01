import React from 'react'

const Cards = ({children}) => {
   let styleProp = {
         padding : 10,
         border : "2px solid black",
         height : 310,
         width : 200,
         borderRadius : 10,
         backgroundColor : "skyBlue",
         boxShadow: '0 6px 12px 0 rgba(91, 133, 196, 0.99), 0 6px 20px 0 rgba(96, 255, 247, 0.62)',
         textAlign: 'center',
         margin: '10px',
    }
  return (
    <div>
      <section style={styleProp}>
            {children}
        </section>
    </div>
  )
}

export default Cards



