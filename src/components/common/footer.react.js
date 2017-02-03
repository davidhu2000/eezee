import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { FooterButton } from './footerbutton.react';

const Footer = () => {
  return (
    <View style={ styles.footer }>
      <FooterButton buttonAction={ () => Actions.splash() }>
        Home
      </FooterButton>
      <FooterButton buttonAction={ () => Actions.signupForm() }>
        Profile
      </FooterButton>
    </View>
  );
};

const styles = {
  footer: {
    height: 60,
    padding: 10,
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    }
  }
};

export { Footer };
