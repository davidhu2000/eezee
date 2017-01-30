import { merge } from 'lodash';

const testReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default testReducer;
