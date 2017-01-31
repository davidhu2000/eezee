import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import {
  AppRegistry,
  Text
} from 'react-native';

import App from './components/app.react';


const store = configureStore();

window.store = store;

class Eezee extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Eezee;
