import { createSelector } from 'reselect';

const selectData = (state) => state.fetchData;

//MENU
export const selectMenuItems = createSelector(
  [selectData],
  (data) => data.menu.items
);

export const selectIsMenuLoaded = createSelector(
  [selectData],
  (data) => !!data.menu
);

export const selectSlider = createSelector([selectData], (data) => data.slider);

export const selectIsSliderLoaded = createSelector(
  [selectData],
  (data) => !!data.slider
);
