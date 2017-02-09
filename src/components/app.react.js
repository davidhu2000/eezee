import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar, View, Platform } from 'react-native';
import firebase from 'firebase';

import Routes from './routes.react';
import { Header } from './common';

class App extends React.Component {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCrY2NuM-0PeNXy4XWYDsCsEblu74eNSj4",
      authDomain: "eezee-4d721.firebaseapp.com",
      databaseURL: "https://eezee-4d721.firebaseio.com",
      storageBucket: "eezee-4d721.appspot.com",
      messagingSenderId: "157950910317"
    };
    firebase.initializeApp(config);
  }

  renderStatusBar() {
    // TODO: update backgroundColor
    return (
      <StatusBar
        hidden={false}
        backgroundColor="rgba(0,0,0,0.8)"
        barStyle="dark-content"
        translucent={true}
      />
    )
  }

  render() {
    return (
      <View style={ styles.viewStyle }>
        { Platform.select({ android: this.renderStatusBar() }) }
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
