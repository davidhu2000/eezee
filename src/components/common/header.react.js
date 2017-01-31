import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ text }) => (
  <View style={ styles.viewStyle }>
    <Text style={ styles.textStyle } >
      { text }
    </Text>
    <Text style={styles.textStyle}>
      Sign Up - Log In
    </Text>
  </View>
);

const styles = {
  textStyle: {
    fontSize: 15,
    fontFamily: 'HelveticaNeue-Bold',
    padding: 10
  },
  viewStyle: {
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
  }
};

export default Header;
