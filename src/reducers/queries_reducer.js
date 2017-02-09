import merge from 'lodash/merge';
import { RECEIVE_QUERY } from '../actions/queries_actions';

const _defaultState = '';

const queriesReducer = (state = _defaultState, action) => {
  switch(action.type) {
    case RECEIVE_QUERY:
      return action.query;
    default:
      return state;
  }
};

export default queriesReducer;
