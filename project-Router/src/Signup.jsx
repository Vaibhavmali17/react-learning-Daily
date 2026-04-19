import React from 'react'
import styles from './CssFiles/signup.module.css'

const Signup = () => {
  return (
    <div className={styles.container}>
       <form className={styles.box}>
        <input type="text" placeholder='Full Name' />
        <input type="text" placeholder='Mobile No.' />
        <input type="text" placeholder='Email Id' />

        <input type="text" placeholder='Password' />
        <button type="button">Sign Up</button>
       </form>
      </div>
  )
}

export default Signup