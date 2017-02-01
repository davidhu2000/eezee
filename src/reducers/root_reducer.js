import { combineReducers } from 'redux';

import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import moviesReducer from './movies_reducer';
import tvShowsReducer from './tv_shows_reducer';

const RootReducer = combineReducers({
  errors: errorsReducer,
  session: sessionReducer,
  movies: moviesReducer,
  tvShows: tvShowsReducer
});

export default RootReducer;
