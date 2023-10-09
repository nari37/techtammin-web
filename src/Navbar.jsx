// Navbar.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <div className='flex'>
      
      <div className='links'>  
      <Link to='/'>Home</Link>
      <Link to='/about'>About Us</Link>
      <Link to='/services'>Services</Link>
      <Link to='/careers'>Careers</Link> 
      <Link to='/gallery'>Gallery</Link>  
      <Link to='/contact'>Contact</Link>  

      </div>

      </div>
    
      <Outlet />
    </div>
  );
}
