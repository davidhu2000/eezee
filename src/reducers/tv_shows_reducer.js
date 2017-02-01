import { merge } from 'lodash';

import {
  RECEIVE_ALL_TV_SHOWS,
  RECEIVE_TV_SHOW
} from '../actions/tv_shows_actions';

const _defaultState = {
  index: {},
  detail: {}
}

const tvShowsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_TV_SHOWS:
      return merge({}, {
        index: action.tvShows,
        detail: {}
      });
    case RECEIVE_TV_SHOW:
      return merge({}, {
        index: {},
        detail: action.tvShow
      })
    default:
      return state;
  }
};

export default tvShowsReducer;
