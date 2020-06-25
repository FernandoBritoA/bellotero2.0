import sliderAT from './slider.actionTypes';

const INITIAL_STATE = {
  slider: null,
  isLoading: true,
  errorMsg: undefined,
};

const sliderReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case sliderAT.FETCH_SLIDER_START:
      return { ...state, isLoading: true };

    case sliderAT.FETCH_SLIDER_SUCCESS:
      return {
        ...state,
        slider: payload,
        isLoading: false,
      };

    case sliderAT.FETCH_SLIDER_FAILURE:
      return {
        ...state,
        errorMsg: payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default sliderReducer;
