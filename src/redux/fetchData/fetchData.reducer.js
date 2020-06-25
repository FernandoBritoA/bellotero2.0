import fetchDataAT from './fetchData.actionTypes';

const INITIAL_STATE = {
  menu: null,
  slider: null,
  calculator: null,
  errorMsg: undefined,
};

const fetchDataReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case fetchDataAT.FETCH_DATA_SUCCESS:
      return {
        ...state,
        ...payload,
      };

    case fetchDataAT.FETCH_DATA_FAILURE:
      return {
        ...state,
        errorMsg: payload,
      };

    default:
      return state;
  }
};
export default fetchDataReducer;
