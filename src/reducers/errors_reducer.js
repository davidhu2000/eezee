import { merge } from 'lodash';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/errors_actions';

const _defaultState = [];

const testReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default testReducer;
