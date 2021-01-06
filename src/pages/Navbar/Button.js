import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button({btnName}) {
  return (
    <Link to='sign-up'>
      <button className='btn'><i className={`${btnName[1]}`}/> {btnName[0]}</button>
    </Link>
  );
}