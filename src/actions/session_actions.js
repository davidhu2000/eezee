import firebase from 'firebase';

import { receiveErrors, clearErrors } from './errors_actions';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const login = ({ email, password }) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        user => {
          dispatch(clearErrors());
          return dispatch(receiveUser(user));
        }
      ).catch(
        err => dispatch(receiveErrors(
          ['Invalid credentials']
        ))
      )
  }
}

export const signup = ({ email, password }) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        user => {
          dispatch(clearErrors());
          return dispatch(receiveUser(user))
        }
      ).catch(
        err => dispatch(receiveErrors(
          ['Invalid email and/or password']
        ))
      )
  }
}

export const logout = () => dispatch => {
  return dispatch(receiveUser(null))
}
