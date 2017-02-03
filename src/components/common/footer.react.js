import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { FooterButton } from './footerbutton.react';

const Footer = () => {
  return (
    <View style={ styles.footer }>
      <FooterButton buttonAction={ () => Actions.splash() }>
        Home
      </FooterButton>
      <FooterButton buttonAction={ () => Actions.profile() }>
        Profile
      </FooterButton>
    </View>
  );
};

const styles = {
  footer: {
    height: 60,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
