import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const BackButton = ({ buttonAction }) => (
  <TouchableOpacity onPress={buttonAction} style={styles.iconContainer}>
    <Image>
      style={styles.iconStyle}
      source={require('./backbutton.png')}
    </Image>
  </TouchableOpacity>
);

const styles = {
  iconStyle: {
    height: 20,
    width: 30
    // flex: 1
    // padding: 5
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  }
};

export { BackButton };
