import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <NavLink to="/home" className='nav-link'> Home </NavLink>
        <NavLink to="/contact" className='nav-link'>Contact</NavLink>
        <NavLink to="/blog" className='nav-link'>Blog</NavLink>

    </nav>
  )
}

export default NavBar