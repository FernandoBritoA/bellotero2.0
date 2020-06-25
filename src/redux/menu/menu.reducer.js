import menuActionTypes from './menu.actionTypes';

const INITIAL_STATE = {
  menu: null,
  isLoading: false,
  errorMsg: undefined,
};

const menuReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case menuActionTypes.FETCH_MENU_START:
      return { ...state, isLoading: true };

    case menuActionTypes.FETCH_MENU_SUCCESS:
      return {
        ...state,
        menu: payload,
        isLoading: false,
      };

    case menuActionTypes.FETCH_MENU_FAILURE:
      return {
        ...state,
        errorMsg: payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default menuReducer;
