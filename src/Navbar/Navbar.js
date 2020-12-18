import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import logo from './logo.svg';
import { ApparelsItem } from './ApparelsItem';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    }else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    setDropdown(false);
    // if (window.innerWidth < 960) {
    //   setDropdown(false);
    // } else {
      
    // }
  };

  return (
    <>
      <div className='navlogo'>
        <Link to='/index'>
          <img className='logo-img' src={logo} alt="veetyo logo" />
        </Link>  
          <div className='srch'>
              <input type='text' placeholder='Search for' id='search' name='search'/>
              <Link to='#'>
                <i className='fas fa-search' />
              </Link>
          </div>
          <div className='nav-icon'>
              <i className='far fa-bell'>
              <br/><span className='icon-tag'>notification</span></i>
              <i className='far fa-heart'>
              <br/><span className='icon-tag'>Favorites</span></i>
              <Button btnName={['add ads','far fa-plus-square']}/>
          </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      </div>
      <nav className='navbar'>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Apparels'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Apparels
            </Link>
            {dropdown && <Dropdown items={ApparelsItem}/>}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Beauty&Health'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Beauty & Health
            </Link>

          </li><li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Computers'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Computer
            </Link>
            
          </li><li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Electronics'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Electronics
            </Link>
            
          </li><li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Furniture&Decor'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Furniture & Decor
            </Link>
            
          </li><li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Mobile&Tablets'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Mobile & Tablets
            </Link>
            
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/RealEstate'
              className='nav-links nav-link-last'
              onClick={closeMobileMenu}
            >
              Real Estates
            </Link>
            
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;