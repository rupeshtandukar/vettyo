import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import logo from './logo.svg';
import { ApparelsItem } from './ApparelsItem';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [dropdown5, setDropdown5] = useState(false);
  const [dropdown6, setDropdown6] = useState(false);
  const [dropdown7, setDropdown7] = useState(false);
  const [dropdown8, setDropdown8] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    }else {
      setDropdown1(true);
    }
  };
   const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    }else {
      setDropdown2(true);
    }
  };
   const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    }else {
      setDropdown3(true);
    }
  };
   const onMouseEnter4 = () => {
    if (window.innerWidth < 960) {
      setDropdown4(false);
    }else {
      setDropdown4(true);
    }
  };
   const onMouseEnter5 = () => {
    if (window.innerWidth < 960) {
      setDropdown5(false);
    }else {
      setDropdown5(true);
    }
  };
   const onMouseEnter6 = () => {
    if (window.innerWidth < 960) {
      setDropdown6(false);
    }else {
      setDropdown6(true);
    }
  };
   const onMouseEnter7 = () => {
    if (window.innerWidth < 960) {
      setDropdown7(false);
    }else {
      setDropdown7(true);
    }
  };
  const onMouseEnter8 = () => {
    if (window.innerWidth < 960) {
      setDropdown8(false);
    }else {
      setDropdown8(true);
    }
  };

  const onMouseLeave = () => {
    setDropdown1(false);
    setDropdown2(false);
    setDropdown3(false);
    setDropdown4(false);
    setDropdown5(false);
    setDropdown6(false);
    setDropdown7(false);
    setDropdown8(false);
  };

  return (
    <>
      <div className='navlogo'>
        <Link to='/'>
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
              <br/><span className='icon-tag'>favorites</span></i>
              <Button btnName={['add ads','far fa-plus-square']} btnclass={'btn'} btpath={'/Login'}/>
          </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      </div>
      <nav className='navbar'>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li id='link1'
            className='nav-item'
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Apparels'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Apparels
            </Link>
            {dropdown1 && <Dropdown items={ApparelsItem}/>}
          </li>
           <li
            className='nav-item'
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Automobiles'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Automobiles
            </Link>
            {dropdown2 && <Dropdown items={ApparelsItem}/>}
          </li>
          <li 
            className='nav-item'
            onMouseEnter={onMouseEnter3}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Beauty&Health'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Beauty & Health
            </Link>
            {dropdown3 && <Dropdown items={ApparelsItem}/>}

          </li><li 
            className='nav-item'
            onMouseEnter={onMouseEnter4}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Computers'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Computer
            </Link>
            {dropdown4 && <Dropdown items={ApparelsItem}/>}
            
          </li>
          <li 
            className='nav-item'
            onMouseEnter={onMouseEnter5}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Electronics'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Electronics
            </Link>
            {dropdown5 && <Dropdown items={ApparelsItem}/>}
            
          </li>
          <li 
            className='nav-item'
            onMouseEnter={onMouseEnter6}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Furniture&Decor'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Furniture & Decor
            </Link>
            {dropdown6 && <Dropdown items={ApparelsItem}/>}
            
          </li><li 
            className='nav-item'
            onMouseEnter={onMouseEnter7}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Mobile&Tablets'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Mobile & Tablets
            </Link>
            {dropdown7 && <Dropdown items={ApparelsItem}/>}
            
          </li>
          <li 
            className='nav-item'
            onMouseEnter={onMouseEnter8}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/RealEstate'
              className='nav-links nav-link-last'
              onClick={closeMobileMenu}
            >
              Real Estates
            </Link>
            {dropdown8 && <Dropdown items={ApparelsItem}/>}
            
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;