import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import Menu from './menu'

const Navbar = () => {
  const [displayMenu, setDisplayMenu]=useState(false)
  const [onHome, setOnHome]=useState(true)

  const handleClick = () => {
    setDisplayMenu(false)
    setOnHome(true)
  }

  return (
    <section id='navbar'>
      <nav>
        <Link to='/' className="nav-header">
          <h1 onClick={handleClick}>Seven Spices</h1>
        </Link>
        <button className="nav-menu" onClick={() => setDisplayMenu(!displayMenu)}>
          <FaBars className={`bars ${displayMenu && 'active'}`}/>
        </button>
      </nav>
      <Menu displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} onHome={onHome} setOnHome={setOnHome}/>
    </section>
  )
}

export default Navbar