import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaLinkedin, FaHome, FaSearch, FaBookOpen, FaHeart,FaInfoCircle } from 'react-icons/fa'

const Menu = ({ displayMenu, setDisplayMenu }) => {
  const [iconDisplay, setIconDisplay]=useState(0)

  return (
    <section className={`menu ${displayMenu && 'active'}`}>
      <ul onMouseLeave={() => setIconDisplay(0)} onClick={() => setDisplayMenu(false)}>
        <Link to='/' className='link'>
          <li onMouseOver={() => setIconDisplay(1)}>Home</li>
        </Link>
        <FaHome className={`background-icon ${iconDisplay===1 ? 'active' : null}`}/>
        <Link to='/search' className='link'>
          <li onMouseOver={() => setIconDisplay(2)}>Search</li>
        </Link>
        <FaSearch className={`background-icon ${iconDisplay===2 ? 'active' : null}`}/>
        <Link to='/favorites' className='link'>
          <li onMouseOver={() => setIconDisplay(3)}>Favorites</li>
        </Link>
        <FaHeart className={`background-icon ${iconDisplay===3 ? 'active' : null}`}/>
        <Link to='/recipes' className='link'>
          <li onMouseOver={() => setIconDisplay(4)}>Recipes</li>
        </Link>
        <FaBookOpen className={`background-icon ${iconDisplay===4 ? 'active' : null}`}/>
        <Link to='/about' className='link'>
          <li onMouseOver={() => setIconDisplay(5)}>About</li>
        </Link>
        <FaInfoCircle className={`background-icon ${iconDisplay===5 ? 'active' : null}`}/>
      </ul>
      <article className='social-icons'>
        <h1>Food Scientists</h1>
        <div className='icons-container'>
          <div>
            <FaInstagram className="insta"/>
          </div>
          <div>
            <FaFacebook className="facebook"/>
          </div>
          <div>
            <FaLinkedin className="linkedin"/>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Menu