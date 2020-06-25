import React from 'react';
import './Calculator.css';
import CalculatorForm from '../CalculatorForm/CalculatorForm';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCalculator } from '../../redux/fetchData/fetchData.selectors';

const Calculator = ({ calculator }) => {
  const { title, description } = calculator;
  return (
    <div className='calculator-overlay'>
      <div className='calculator-container'>
        <h1 className='calculator-title'>{title}</h1>
        <h4 className='calculator-subtitle'>{description}</h4>

        <CalculatorForm />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  calculator: selectCalculator,
});

export default connect(mapStateToProps)(Calculator);
