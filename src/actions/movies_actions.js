export const RECEIVE_ALL_MOVIES = 'RECEIVE_ALL_MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

export const receiveAllMovies = movies => ({
  type: RECEIVE_ALL_MOVIES,
  movies
});

export const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie
});
