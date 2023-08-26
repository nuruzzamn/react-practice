import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav >
        <Link to={"/"} className='nav-link'>Home</Link>
        <Link to={"/contact"} className='nav-link'>Contact</Link>
        <Link to={"/blog"} className='nav-link'>Blogs</Link>
    </nav>
  )
}

export default Navbar