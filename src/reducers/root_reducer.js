import { combineReducers } from 'redux';

import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import moviesReducer from './movies_reducer';
import tvShowsReducer from './tv_shows_reducer';
import queriesReducer from './queries_reducer';

const RootReducer = combineReducers({
  errors: errorsReducer,
  session: sessionReducer,
  movies: moviesReducer,
  tvShows: tvShowsReducer,
  queries: queriesReducer
});

export default RootReducer;
