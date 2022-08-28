import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import logo from '../assets/logo.png'
import Menu from './menu'

const Navbar = () => {
  const [displayMenu, setDisplayMenu]=useState(false)
  const [isDesktop, setIsDesktop]=useState(window.innerWidth>1200)

  const updateState = () => {
    setIsDesktop(window.innerWidth>1200)
  }

  useEffect(() => {
    window.addEventListener('resize', updateState)
    return () => window.removeEventListener('resize', updateState)
  })

  useEffect(() => {
    if(isDesktop) {
      setDisplayMenu(false)
    }
  }, [isDesktop])

  return (
    <section id='navbar'>
      <nav>
        <Link to='/' className="nav-header">
          {isDesktop ? 
          <div>
            <img onClick={() => setDisplayMenu(false)} src={logo} alt='Seven Spices' /> 
          </div>
          : 
          <h1 onClick={() => setDisplayMenu(false)}>Seven Spices</h1>}
        </Link>
        {isDesktop && 
        <ul className='desktop-menu'>
          <Link to='/' className='desktop-link'>
            <li>Home</li>
          </Link>
          <Link to='/search' className='desktop-link'>
            <li>Search</li>
          </Link>
          <Link to='/favorites' className='desktop-link'>
            <li>Favorites</li>
          </Link>
          <Link to='/recipes' className='desktop-link'>
            <li>Recipes</li>
          </Link>
          <Link to='/about' className='desktop-link'>
            <li>About Us</li>
          </Link>
        </ul>}
        {!isDesktop &&
        <button className="nav-menu" onClick={() => setDisplayMenu(!displayMenu)}>
          <FaBars className={`bars ${displayMenu && 'active'}`}/>
        </button>}
      </nav>
      <Menu displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} />
    </section>
  )
  // component will return a navbar containing a header and a hamburger menu to the right, on click the menu component will be rendered displaying the menu options, on click of the header, it will once again render the home component
}

export default Navbar