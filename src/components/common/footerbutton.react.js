import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const FooterButton = ({ buttonAction, children }) => (
  <TouchableOpacity onPress={buttonAction} style={styles.buttonStyle}>
    <Text style={styles.textStyle}>
      { children }
    </Text>
  </TouchableOpacity>
);

const styles = {
  textStyle: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center'
  },
  buttonStyle: {
    width: 225,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 2,
    backgroundColor: '#3B5998',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    }
  }
};

export { FooterButton };
