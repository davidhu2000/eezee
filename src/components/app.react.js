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

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: '#3B5998'
  },
  textStyle: {
    color: '#fff',
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 60
  },
  searchArea: {
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default App;
