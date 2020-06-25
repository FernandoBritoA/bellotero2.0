import { createSelector } from 'reselect';

const selectSliderState = (state) => state.slider;

export const selectSlider = createSelector(
  [selectSliderState],
  (state) => state.slider
);

export const selectIsSliderLoaded = createSelector(
  [selectSliderState],
  (state) => !!state.slider
);

export const selectIsSliderLoading = createSelector(
  [selectSliderState],
  (state) => state.isLoading
);
