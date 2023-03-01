import React from 'react'
import IPGLOGO from '../../assets/IPGLOGO.png'

import './Nav.scss'

const Nav = () => {
  return (
    <nav className='navBar'>
      <img className='logo' src={IPGLOGO} alt='IPG Logo' />
      <ul className='mainNav'>
        <li className='navItems'>Home</li>
        <li className='navItems'>About Us</li>
        <li className='navItems'>Services</li>
        <li className='navItems'>Contact Us</li>
      </ul>
    </nav>
  )
}

export default Nav
