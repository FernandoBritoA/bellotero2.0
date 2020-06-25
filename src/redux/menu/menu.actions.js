import menuActionTypes from './menu.actionTypes';
import axios from 'axios';

const fetchMenuStart = () => ({
  type: menuActionTypes.FETCH_MENU_START,
});

const fetchMenuSuccess = (menu) => ({
  type: menuActionTypes.FETCH_MENU_SUCCESS,
  payload: menu,
});

const fetchMenuFailure = (errorMsg) => ({
  type: menuActionTypes.FETCH_MENU_FAILURE,
  payload: errorMsg,
});

export const getMenu = () => async (dispatch) => {
  dispatch(fetchMenuStart());
  try {
    const response = await axios.get(
      'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json'
    );
    const menu = response.data;
    dispatch(fetchMenuSuccess(menu));
  } catch (error) {
    dispatch(fetchMenuFailure(error.message));
  }
};
