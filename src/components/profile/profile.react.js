import React from 'react';
import { Text, View } from 'react-native';

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      
    };
  }
  render() {
    return (
      <View style={ styles.viewStyle }>
        <Text style={ styles.usernameStyle }></Text>
        <Text style={ styles.textStyle }></Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {

  },
  usernameStyle: {

  },
  textStyle: {

  }
};

export default Profile;
