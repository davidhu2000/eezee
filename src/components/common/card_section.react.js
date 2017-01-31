import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children }) => (
  <View style={ styles.containerStyle }>
    { children }
  </View>
);

const styles = {
  constainerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
