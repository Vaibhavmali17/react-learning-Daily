// import React from 'react'
// import styles from './CssFiles/home.module.css'

// const Home = () => {
//   return (
//     <div>
//       <div className={styles.home}><h1>Hello Home page is Running</h1>
//       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias deleniti a amet vel maxime eos soluta quaerat quo? Molestiae libero eaque culpa quo tenetur! Cum aliquid adipisci earum officiis ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus et labore maxime deleniti, tenetur odit cumque voluptate, blanditiis vitae culpa, beatae eligendi. Consectetur doloremque, veniam temporibus eius molestias cupiditate distinctio? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus incidunt sint, harum deleniti animi iure veniam ducimus dolorum. Repellat recusandae corporis est quo nam cumque optio voluptatum explicabo maxime autem.</p></div>
//     </div>
//   )
// }

// export default Home
import React from 'react'
import styles from './CssFiles/home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1>Welcome to My Website</h1>
        <p>Build fast and modern web apps using React.</p>
        <button className={styles.btn}>Get Started</button>
      </div>

      {/* Features Section */}
      <div className={styles.features}>
        <div className={styles.card}>
          <h3>Fast</h3>
          <p>React apps are fast and efficient.</p>
        </div>

        <div className={styles.card}>
          <h3>Reusable</h3>
          <p>Components can be reused easily.</p>
        </div>

        <div className={styles.card}>
          <h3>Scalable</h3>
          <p>Perfect for large applications.</p>
        </div>
      </div>

    </div>
  )
}

export default Home