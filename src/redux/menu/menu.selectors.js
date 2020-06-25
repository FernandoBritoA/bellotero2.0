import { createSelector } from 'reselect';

const selectMenu = (state) => state.menu;

export const selectMenuItems = createSelector(
  [selectMenu],
  (menu) => menu.menu.items
);

export const selectIsLoading = createSelector(
  [selectMenu],
  (menu) => menu.isLoading
);
