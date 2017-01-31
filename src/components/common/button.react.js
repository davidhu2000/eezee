import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ buttonAction, children }) => (
  <TouchableOpacity onPress={buttonAction} style={styles.buttonStyle}>
    <Text style={styles.textStyle}>
      { children }
    </Text>
  </TouchableOpacity>
);

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  buttonStyle: {
    // flex: 1,
    // alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b5998',
    borderRadius: 2,
    // borderColor: '#3b5998',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    height: 40,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    }
  }
};

export { Button };
