import React from 'react';
import './Menu.css';
import bellotero from './bellotero.png';
import justLogo from './justLogo.png';
import MenuItem from '../MenuItem/MenuItem';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMenuItems } from '../../redux/fetchData/fetchData.selectors';

const Menu = ({ menuItems }) => {
  return (
    <div className='menu'>
      <Link to='/' className='title'>
        <img
          src={bellotero}
          alt='bellotero'
          className='main'
          style={{ height: '60%' }}
        />
        <img
          src={justLogo}
          alt='bellotero'
          className='hidden'
          style={{ height: '60%' }}
        />
      </Link>
      <ul className='menu-items'>
        {menuItems.map(({ ...props }, i) => (
          <MenuItem key={i} {...props} />
        ))}
      </ul>
    </div>
  );
};

const maspStateToProps = createStructuredSelector({
  menuItems: selectMenuItems,
});

export default connect(maspStateToProps)(Menu);
