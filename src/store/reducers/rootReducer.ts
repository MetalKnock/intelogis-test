import { combineReducers } from '@reduxjs/toolkit';
import { requestSlice } from './requestReducer';
import { routeSlice } from './routeReducer';

const rootReducer = combineReducers({
  [requestSlice.name]: requestSlice.reducer,
  [routeSlice.name]: routeSlice.reducer,
});

export { rootReducer };
