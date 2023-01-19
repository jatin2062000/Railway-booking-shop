import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
        <h1>Subhash Railway Agent</h1>
        <main>
            <Link to={"/"}>Home</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/About"}>About</Link>
        </main>
    </nav>
  )
}

export default Header