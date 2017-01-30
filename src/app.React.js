import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import {
  AppRegistry,
  Text
} from 'react-native';

import Header from './components/header.react';

const store = configureStore();

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Header text={'Eezee'} />
      </Provider>
    );
  }
}

export default App;
