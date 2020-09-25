import { all } from 'redux-saga/effects';
import { writeSaga } from './write';

export function* rootSaga() {
  yield all([writeSaga()]);
}
