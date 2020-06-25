import calculatorAT from './calculator.actionTypes';

const INITIAL_STATE = {
  calculator: null,
  isLoading: true,
  errorMsg: undefined,
};

const calculatorReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case calculatorAT.FETCH_CALCULATOR_START:
      return { ...state, isLoading: true };

    case calculatorAT.FETCH_CALCULATOR_SUCCESS:
      return {
        ...state,
        calculator: payload,
        isLoading: false,
      };

    case calculatorAT.FETCH_CALCULATOR_FAILURE:
      return {
        ...state,
        errorMsg: payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default calculatorReducer;
