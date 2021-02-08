import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button({btnName, btnclass, btpath}) {
  return (
    <Link to={btpath}>
      <button className={btnclass}><i className={`${btnName[1]}`}/> {btnName[0]}</button>
    </Link>
  );
}