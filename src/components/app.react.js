import React from 'react';
import { Provider } from 'react-redux';
import {
  Text,
  View
} from 'react-native';

import Routes from './routes.react';

class App extends React.Component {

  render() {
    return (
      <View>
        <Routes />
      </View>
    );
  }
}

export default App;
