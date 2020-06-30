import React from 'react';
import './RangeSlider.css';

const RangeSlider = ({ handleChange, isMoney, ...otherProps }) => {
  return (
    <input
      id={`${isMoney ? 'isMoney' : 'isNotMoney'}`}
      className='range-slider'
      type='range'
      onChange={handleChange}
      {...otherProps}
    />
  );
};

export default RangeSlider;
