import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

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
          dispatch(receiveUser(user));
          Actions.profile();
        }
      ).catch(
        err => dispatch(receiveErrors(
          [err.message]
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
          dispatch(receiveUser(user));
          Actions.profile();
        }
      ).catch(
        err => dispatch(receiveErrors(
          [err.message]
        ))
      )
  }
}

export const logout = () => dispatch => {
  return dispatch(receiveUser(null))
}
