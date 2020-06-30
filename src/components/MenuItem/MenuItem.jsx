import React from 'react';
import './MenuItem.css';
import { Link, withRouter } from 'react-router-dom';

const MenuItem = ({ location, ...props }) => {
  const { text, route } = props;
  const active = location.pathname === '/' + route;
  return (
    <li>
      <Link to={route} className={`${active ? 'active' : ''} menu-item`}>
        {text}
      </Link>
    </li>
  );
};

export default withRouter(MenuItem);
