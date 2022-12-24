import React from 'react'
import "./style.css"

import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'



const App = () => {
  return (
    <div>
        <NavBar/>
        <Home/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>  
    </div>
  )
}

export default App