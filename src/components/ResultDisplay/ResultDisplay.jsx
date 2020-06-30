import React from 'react';
import './ResultDisplay.css';

const ResultDisplay = ({ label, result }) => {
  return (
    <div className='result-display'>
      <div className='result-container'>
        <i className='result-unit'>$</i>
        <span className='final-result'>{result}</span>
      </div>

      <label className='result-label'>{label}</label>
    </div>
  );
};

export default ResultDisplay;
