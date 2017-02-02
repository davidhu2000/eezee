import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Card, Input, Button, SearchInput } from '../common';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
  }
  render() {
    return (
      <View style={ styles.footer }>
          <SearchInput
             label="Search"
             placeholder="Movie Name"
           />
      </View>
    );
  }
}

const styles = {
  navtext: {
    flex: 1,
    fontSize: 20,
    color: '#3B5998'
  },
  footer: {
    height: 70,
    paddingTop: 20,
    paddingRight: 25,
    paddingLeft: 25,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
};

export default SearchBar;

// removed from navbar
// <Text style={ styles.navtext } onPress={ () => Actions.splash() }>Home</Text>
