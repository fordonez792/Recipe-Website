import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import logo from '../assets/logo.png'
import Menu from './menu'
import { useMyContext } from '../context/context'

const Navbar = () => {
  const [displayMenu, setDisplayMenu]=useState(false)

  return (
    <section id='navbar'>
      <nav>
        <Link to='/' className="nav-header">
          <h1>Seven Spices</h1>
        </Link>
        <button className="nav-menu" onClick={() => setDisplayMenu(!displayMenu)}>
          <FaBars className={`bars ${displayMenu && 'active'}`}/>
        </button>
      </nav>
      <Menu displayMenu={displayMenu} setDisplayMenu={setDisplayMenu}/>
    </section>
  )
}

export default Navbar