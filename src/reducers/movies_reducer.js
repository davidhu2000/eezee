import merge from 'lodash/merge';
import {
  RECEIVE_ALL_MOVIES,
  RECEIVE_MOVIE
} from '../actions/movies_actions';

const _defaultState = {
  index: {},
  detail: {}
}

const moviesReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_MOVIES:
      return merge({}, {
        index: action.movies,
        detail: {}
      });
    case RECEIVE_MOVIE:
      return merge({}, {
        index: {},
        detail: action.movie
      })
    default:
      return state;
  }
};

export default moviesReducer;
