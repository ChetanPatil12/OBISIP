import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <input type="checkbox" id='check' />
      <label><FontAwesomeIcon icon={faBars} className="checkbtn" /></label>
      <label className='logo'>Pizzy</label>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/about">About</a></li>
        <li><a href=""><FontAwesomeIcon icon={faCartShopping} /></a></li>
      </ul>
    </nav>
  )
}

export default Navbar
