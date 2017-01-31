import { merge } from 'lodash';
import { RECEIVE_USER } from '../actions/session_actions';

const _defaultState = {
  currentUser: null
};

const testReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return { currentUser: action.user }
    default:
      return state;
  }
};

export default testReducer;
