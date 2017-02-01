export const RECEIVE_ALL_TV_SHOWS = 'RECEIVE_ALL_TV_SHOWS';
export const RECEIVE_TV_SHOW = 'RECEIVE_TV_SHOW';

export const receiveAllTvShows = tvShows => ({
  type: RECEIVE_ALL_TV_SHOWS,
  tvShows
});

export const receiveTvShow = tvShow => ({
  type: RECEIVE_TV_SHOW,
  tvShow
});
