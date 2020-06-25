import fetchDataAT from './fetchData.actionTypes';
import axios from 'axios';

const fetchDataStart = () => ({
  type: fetchDataAT.FETCH_DATA_START,
});

const fetchDataSuccess = (data) => ({
  type: fetchDataAT.FETCH_DATA_SUCCESS,
  payload: data,
});

const fetchDataFailure = (errorMsg) => ({
  type: fetchDataAT.FETCH_DATA_FAILURE,
  payload: errorMsg,
});

const getData = async (url, dispatch) => {
  dispatch(fetchDataStart());
  try {
    const response = await axios.get(url);
    const data = response.data;
    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};

export const getMenu = () => (dispatch) => {
  getData(
    'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json',
    dispatch
  );
};
export const getSlider = () => (dispatch) => {
  getData(
    'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json',
    dispatch
  );
};

export const getCalculator = () => (dispatch) => {
  getData(
    'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json',
    dispatch
  );
};
