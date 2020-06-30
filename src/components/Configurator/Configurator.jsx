import React from 'react';
import './Configurator.css';

const Configurator = ({ label, handleChange, isMoney, ...otherProps }) => {
  return (
    <div className='configurator'>
      <div className='label-input'>
        <p className='configurator-label'>{label}</p>
        <div className='input-container'>
          <input
            className={`configurator-input ${isMoney ? 'money-input' : ''}`}
            onChange={handleChange}
            {...otherProps}
          />
          {isMoney ? <span className='unit'>$</span> : null}
        </div>
      </div>
      <input type='range' min={10} max={100} />
    </div>
  );
};

export default Configurator;
