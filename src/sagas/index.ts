import { all } from 'redux-saga/effects';
import { postSaga } from './post';
import { writeSaga } from './write';

export function* rootSaga() {
  yield all([writeSaga(), postSaga()]);
}
