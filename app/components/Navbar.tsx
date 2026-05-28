import React from 'react'
import { Link } from 'react-router'

export const NavBar = () => {
  return (
    <nav className='navbar'>
        <Link to="/">
            <p className="text-2xl font-bold text-gradient">Home</p>
        </Link>
        <Link to="/upload" className='primary-button w-fit '>
            <p className="text-2xl font-bold text-gradient">Upload</p>
        </Link>
    </nav>
  )
}
