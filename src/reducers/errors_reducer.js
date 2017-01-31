import { merge } from 'lodash';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/errors_actions';

const _defaultState = [];

const testReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  console.log(action);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default testReducer;
