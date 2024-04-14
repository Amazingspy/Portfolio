import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';


function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const MenuAnimation = useSpring({
    transform: isOpen ? "translateX(-50px)" : "translateX(0)",
    opacity: isOpen ? 1 :0
  })

  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Your Logo</Link>
        <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggle}>
          <div className="toggle-line"></div>
          <div className="toggle-line"></div>
          <div className="toggle-line"></div>
        </div>
        <animated.ul className={`nav-menu ${isOpen ? 'open' : ''}`} style={MenuAnimation}>
          <li className='nav-item'>
            <NavLink to="/" className='nav-links' activeClassName='active'>Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to="/about" className='nav-links' activeClassName='active'>About</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to="/projects" className='nav-links' activeClassName='active'>Projects</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to="/resume" className='nav-links' activeClassName='active'>Resume</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to="/contact" className='nav-links' activeClassName='active'>Contact</NavLink>
          </li>
        </animated.ul>
      </div>
    </nav>
  );
}

export default Navbar;
