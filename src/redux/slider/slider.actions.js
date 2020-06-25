import sliderAT from './slider.actionTypes';
import axios from 'axios';

const fetchSliderStart = () => ({
  type: sliderAT.FETCH_SLIDER_START,
});

const fetchSliderSuccess = (slider) => ({
  type: sliderAT.FETCH_SLIDER_SUCCESS,
  payload: slider,
});

const fetchSliderFailure = (errorMsg) => ({
  type: sliderAT.FETCH_SLIDER_FAILURE,
  payload: errorMsg,
});

export const getSlider = () => async (dispatch) => {
  dispatch(fetchSliderStart());
  try {
    const response = await axios.get(
      'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json'
    );
    const data = response.data;
    dispatch(fetchSliderSuccess(data.slider));
  } catch (error) {
    dispatch(fetchSliderFailure(error.message));
  }
};
