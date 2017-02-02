import merge from 'lodash/merge';
import { RECEIVE_QUERY } from '../actions/queries_actions';

const _defaultState = {
  //TODO add default state
};

const queriesReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_QUERY:
      return merge({}, {
        //TODO update state
      });
    default:
      return state;
  }
};

export default queriesReducer;
