import { combineReducers } from 'redux';
import menu from './menu/menu.reducer';
import slider from './slider/slider.reducer';

const rootReducer = combineReducers({ menu, slider });

export default rootReducer;
