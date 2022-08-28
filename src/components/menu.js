import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaLinkedin, FaHome, FaSearch, FaBookOpen, FaHeart,FaInfoCircle } from 'react-icons/fa'

const Menu = ({ displayMenu, setDisplayMenu }) => {
  const [iconDisplay, setIconDisplay]=useState(0)
  const menuRef=useRef([])
  const temp=window.location.pathname
  const path=temp.split('/', 2)
  // path will allow to know which component is being rendered therefore allowing to set the active class correctly

  const helperFunction = () => {
    menuRef.current.forEach(item => {
      item.classList.remove('active')
      // removes the  active class from all menu options
    })
    if(path[1]===''){
      menuRef.current[0].classList.add('active')
    }
    if(path[1]==='search' ){
      menuRef.current[1].classList.add('active')
    }
    if(path[1]==='favorites'){
      menuRef.current[2].classList.add('active')
    }
    if(path[1]==='recipes'){
      menuRef.current[3].classList.add('active')
    }
    if(path[1]==='about'){
      menuRef.current[4].classList.add('active')
    }
    // adds the active class to the one that was just clicked
  }

  useEffect(() => {
    helperFunction()
  }, [path])

  return (
    <section className={`menu ${displayMenu && 'active'}`}>
      <ul onMouseLeave={() => setIconDisplay(0)} onClick={() => setDisplayMenu(false)}>
        <Link to='/' className='link'>
          <li ref={el => menuRef.current[0]=el} onMouseOver={() => setIconDisplay(1)} onClick={helperFunction}>Home</li>
        </Link>
        <FaHome className={`background-icon ${iconDisplay===1 ? 'active' : null}`}/>
        <Link to='/search' className='link'>
          <li ref={el => menuRef.current[1]=el} onMouseOver={() => setIconDisplay(2)} onClick={helperFunction}>Search</li>
        </Link>
        <FaSearch className={`background-icon ${iconDisplay===2 ? 'active' : null}`}/>
        <Link to='/favorites' className='link'>
          <li ref={el => menuRef.current[2]=el} onMouseOver={() => setIconDisplay(3)} onClick={helperFunction}>Favorites</li>
        </Link>
        <FaHeart className={`background-icon ${iconDisplay===3 ? 'active' : null}`}/>
        <Link to='/recipes' className='link'>
          <li ref={el => menuRef.current[3]=el} onMouseOver={() => setIconDisplay(4)} onClick={helperFunction}>Recipes</li>
        </Link>
        <FaBookOpen className={`background-icon ${iconDisplay===4 ? 'active' : null}`}/>
        <Link to='/about' className='link'>
          <li ref={el => menuRef.current[4]=el} onMouseOver={() => setIconDisplay(5)} onClick={helperFunction}>About Us</li>
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
// component will return menu items with conditional rendering of a single background icon depending on the item the mouse is hovering

export default Menu