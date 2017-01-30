import { createStore, applyMiddleware } from 'redux';
import thunk from '../middleware/thunk';
import RootReducer from '../reducers/RootReducer.js';

const _defaultState = {};

const configureStore = (preloadedState = _defaultState) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);

export default configureStore;
