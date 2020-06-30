import React from 'react';
import './RangeSlider.css';

const RangeSlider = ({ handleChange, isMoney, ...otherProps }) => {
  const { max, min, value } = otherProps;

  const getRangePercent = () => {
    const calc = (max - min) / 100;
    return (value - min) / calc;
  };
  return (
    <input
      id={`${isMoney ? 'isMoney' : 'isNotMoney'}`}
      className='range-slider'
      type='range'
      style={{
        background: `linear-gradient(to right, #071eb3 ${getRangePercent()}%, #f0f2ff 0 )`,
      }}
      onChange={handleChange}
      {...otherProps}
    />
  );
};

export default RangeSlider;
