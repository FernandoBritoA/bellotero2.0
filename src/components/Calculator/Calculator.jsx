import React from 'react';
import './Calculator.css';
import CalculatorForm from '../CalculatorForm/CalculatorForm';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCalculator } from '../../redux/fetchData/fetchData.selectors';

const Calculator = ({ calculator }) => {
  const { title, description } = calculator;
  const titleArr = title.split(' ');
  const title2 = titleArr.pop();
  const title1 = titleArr.join(' ');
  return (
    <div className='calculator-overlay'>
      <div className='calculator-text'>
        <h1 className='calculator-title'>{title1}</h1>
        <h1 className='calculator-title'>{title2}</h1>
        <p className='calculator-subtitle'>{description}</p>
      </div>
      <CalculatorForm />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  calculator: selectCalculator,
});

export default connect(mapStateToProps)(Calculator);
