import { combineReducers } from 'redux';

import TestReducer from './TestReducer';

const RootReducer = combineReducers({
  test: TestReducer
});

export default RootReducer;
