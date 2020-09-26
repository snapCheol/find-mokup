import { all } from 'redux-saga/effects';
import { postSaga } from './post';
import { postListSaga } from './postList';
import { writeSaga } from './write';

export function* rootSaga() {
  yield all([writeSaga(), postSaga(), postListSaga()]);
}
