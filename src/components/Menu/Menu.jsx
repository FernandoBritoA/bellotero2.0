import React from 'react';
import './Menu.css';
import bellotero from './bellotero.png';
import MenuItem from '../MenuItem/MenuItem';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMenuItems } from '../../redux/fetchData/fetchData.selectors';

const Menu = ({ menuItems }) => {
  return (
    <div className='menu'>
      <div className='title'>
        <img src={bellotero} alt='bellotero' style={{ height: '60%' }} />
      </div>
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
