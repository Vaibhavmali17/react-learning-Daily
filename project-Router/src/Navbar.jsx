import React from 'react'
// import './App.css'
import { Link } from 'react-router-dom'
import styles from './CssFiles/navbar.module.css'

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <Link to={"/home"}> <img src="./src/assets/react.svg" alt="logo" /> </Link>
       <Link to={"/home"}><li>Home</li></Link>
       <Link to={"/about"}><li>About</li></Link>
        <Link to={"/services"}><li>Service</li></Link>
        <Link to={"/signup"}><li>Sign Up</li></Link>
        <Link to={"/login"}><li>Login</li></Link>
      </nav>
    </div>
  )
}   

export default Navbar