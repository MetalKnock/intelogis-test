import { spawn } from 'redux-saga/effects';
import { routeSaga } from './routeSaga';

function* rootSaga() {
  yield spawn(routeSaga);
}

export { rootSaga };
