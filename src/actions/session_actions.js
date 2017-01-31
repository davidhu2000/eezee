import firebase from 'firebase';

import { receiveErrors, clearErrors } from './errors_actions';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const login = ({ email, password }) => dispatch => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      user => {
        dispatch(clearErrors())
        return dispatch(receiveUser(user))
      }
    ).catch(
      err => dispatch(receiveErrors(err.responseJSON))
    )
}

export const logout = () => dispatch => {
  return dispatch(receiveUser(null))
}
