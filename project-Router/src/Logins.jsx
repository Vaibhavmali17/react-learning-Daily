import React from 'react'
import styles from './CssFiles/login.module.css'
const Logins = () => {
  return (
   <div className={styles.container}>
   <form className={styles.box}>
    <input type="text" placeholder='Email Id' />
    <input type="password" placeholder='Password' />
    <button type="submit">Login</button>
   </form>
  </div>
  )
}

export default Logins
