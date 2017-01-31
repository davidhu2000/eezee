import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ text }) => (
  <View style={ styles.viewStyle }>
    <Text style={ styles.textStyle }>
      { text }
    </Text>
  </View>
);

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};

export { Header };
