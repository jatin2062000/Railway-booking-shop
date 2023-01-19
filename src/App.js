import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
import React from 'react'
import Header from "./components/Header"
import About from "./components/About"
import "./style/App.scss"
import Home from "./components/Home"
import "./style/Home.scss"
import "./style/color.scss"
import "./style/Header.scss"
import Footer from "./components/Footer"
import "./style/footer.scss"
import Contact from "./components/contact"
import "./style/contact.scss"



function App() {
  return (
    <Router>
    <Header/>
<Routes>
  <Route  path="/" element={<Home/>} />
  <Route  path="/contact" element={<Contact/>} />
  <Route  path="/About" element={<About/>} />
</Routes>

<Footer/>

    </Router>
  )
}

export default App