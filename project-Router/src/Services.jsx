import React from 'react'

const Services = () => {
  return (
    <div>
        <h1>Hello Services page is Running</h1>
    </div>
  )
}

export default Services




// const Services = () => {
//   const services = [
//     "Web Development",
//     "App Development",
//     "UI/UX Design",
//     "SEO Optimization",
//     "API Integration"
//   ]

//   return (
//     <div>
//       <h1>Our Services</h1>
//       <div style={{display:'flex', gap:'20px'}}>
//         {services.map((item, index) => (
//           <div key={index} style={{border:'1px solid black', padding:'10px'}}>
//             <h3>{item}</h3>
//             <p>This is {item} service.</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Services