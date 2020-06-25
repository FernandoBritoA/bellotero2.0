import { combineReducers } from 'redux';
import fetchData from './fetchData/fetchData.reducer';

const rootReducer = combineReducers({ fetchData });

export default rootReducer;
