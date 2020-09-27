import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../redux/reducers';
import { rootSaga } from '../redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function loadAuth() {
  try {
    const auth = localStorage.getItem('auth');
    if (!auth) return;
  } catch (error) {
    console.log('localStorage가 작동하지 않습니다!');
  }
}

sagaMiddleware.run(rootSaga);
loadAuth();

export default store;
