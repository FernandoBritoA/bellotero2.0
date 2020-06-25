import React, { useEffect } from 'react';
import Calculator from '../components/Calculator/Calculator';

import { connect } from 'react-redux';
import { getCalculator } from '../redux/fetchData/fetchData.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsCalculatorLoaded } from '../redux/fetchData/fetchData.selectors';

const Page2 = ({ getCalculator, isCalculatorLoaded }) => {
  useEffect(() => {
    if (!isCalculatorLoaded) {
      getCalculator();
    }
  }, [getCalculator, isCalculatorLoaded]);
  return isCalculatorLoaded ? <Calculator /> : null;
};

const mapStateToProps = createStructuredSelector({
  isCalculatorLoaded: selectIsCalculatorLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getCalculator: () => dispatch(getCalculator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
