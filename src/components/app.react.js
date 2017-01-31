import React from 'react';
import { Provider } from 'react-redux';
import { Text, View } from 'react-native';
import firebase from 'firebase';

import Routes from './routes.react';

class App extends React.Component {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyDOCdS9Ho5MluRHsqABjnIRjO0dZW03tjs",
      authDomain: "eezee-33067.firebaseapp.com",
      databaseURL: "https://eezee-33067.firebaseio.com",
      storageBucket: "eezee-33067.appspot.com",
      messagingSenderId: "904163115748"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={ styles.viewStyle }>
        <Routes />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: '#3B5998'
  }
};

export default App;
