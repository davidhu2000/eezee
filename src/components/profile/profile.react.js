import React from 'react';
import { Text, View } from 'react-native';

import { Footer } from '../common';
import Navbar from '../navbar/navbar.react';

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }
  render() {
    return (
      <View style={ styles.viewStyle }>
        <Navbar />
        <Text style={ styles.usernameStyle }>Test</Text>
        <Text style={ styles.textStyle }></Text>
        <Footer />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    justifyContent: 'space-between',
    flex: 1
  },
  usernameStyle: {

  },
  textStyle: {

  }
};

export default Profile;
