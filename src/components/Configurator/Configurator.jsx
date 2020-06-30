import React from 'react';
import './Configurator.css';
import RangeSlider from '../RangeSlider/RangeSlider';

const Configurator = ({ label, handleChange, isMoney, ...otherProps }) => {
  return (
    <div className='configurator'>
      <div className='label-input'>
        <p className='configurator-label'>{label}</p>
        <div className='input-container'>
          <input
            type='number'
            className={`configurator-input ${isMoney ? 'money-input' : ''}`}
            onChange={handleChange}
            {...otherProps}
          />
          {isMoney ? <span className='unit'>$</span> : null}
        </div>
      </div>
      <RangeSlider
        handleChange={handleChange}
        isMoney={isMoney}
        {...otherProps}
      />
    </div>
  );
};

export default Configurator;
