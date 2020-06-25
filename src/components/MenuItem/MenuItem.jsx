import React from 'react';
import './MenuItem.css';
import { Link } from 'react-router-dom';

const MenuItem = ({ ...props }) => {
  const { text, route } = props;
  return (
    <li className='menu-item'>
      <Link to={route}>{text}</Link>
    </li>
  );
};

export default MenuItem;
