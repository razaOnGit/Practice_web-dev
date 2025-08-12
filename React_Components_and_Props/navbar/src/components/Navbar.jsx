import React from 'react'
import './Navbar.css'; // Assuming you have a CSS file for styling
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
