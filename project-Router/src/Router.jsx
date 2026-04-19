import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Services from './Services.jsx'
import Navbar from './Navbar.jsx'
import Signup from './Signup.jsx'
import Login from './Logins.jsx'


const Router = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default Router