import calculatorAT from './calculator.actionTypes';
import axios from 'axios';

const fetchCalculatorStart = () => ({
  type: calculatorAT.FETCH_CALCULATOR_START,
});

const fetchCalculatorSuccess = (calculator) => ({
  type: calculatorAT.FETCH_CALCULATOR_SUCCESS,
  payload: calculator,
});

const fetchCalculatorFailure = (errorMsg) => ({
  type: calculatorAT.FETCH_CALCULATOR_FAILURE,
  payload: errorMsg,
});

export const getCalculator = () => async (dispatch) => {
  dispatch(fetchCalculatorStart());
  try {
    const response = await axios.get(
      'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json'
    );
    const data = response.data;
    dispatch(fetchCalculatorSuccess(data.calculator));
  } catch (error) {
    dispatch(fetchCalculatorFailure(error.message));
  }
};
