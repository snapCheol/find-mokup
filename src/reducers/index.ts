import { combineReducers } from 'redux';
import write from './write';

const rootReducer = combineReducers({
  write,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
