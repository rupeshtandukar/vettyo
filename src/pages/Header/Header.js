import React from 'react';
import './Header.css';

const Header = ({headTitle ,Cname}) => {
  return (
    <div className={`${Cname} header`}>
    	<h1 className='headTitle'>{headTitle}</h1>
    </div>
  );
}
export default Header;
