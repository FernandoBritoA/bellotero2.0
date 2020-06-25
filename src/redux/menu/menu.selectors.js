import { createSelector } from 'reselect';

const selectMenu = (state) => state.menu;

export const selectMenuItems = createSelector(
  [selectMenu],
  (state) => state.menu.items
);

export const selectIsMenuLoading = createSelector(
  [selectMenu],
  (menu) => menu.isLoading
);
