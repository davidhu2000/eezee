import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import {
  AppRegistry,
  Text
} from 'react-native';

const store = configureStore();

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Text>Welcome to Eezee</Text>
      </Provider>
    );
  }
}

export default App;
