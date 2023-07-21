import { combineReducers } from '@reduxjs/toolkit';
import { requestSlice } from './requestReducer';

const rootReducer = combineReducers({
  [requestSlice.name]: requestSlice.reducer,
});

export { rootReducer };
