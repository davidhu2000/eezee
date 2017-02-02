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
        <Text style={{flex: 1, fontSize: 20, color: '#3B5998', paddingLeft: 20}} onPress={ () => Actions.splash() }>Home</Text>
          <SearchInput
             label="Search"
             placeholder="Movie Name"
           />
      </View>
    );
  }
}

const styles = {
  footer: {
    height: 70,
    paddingTop: 20,
    paddingRight: 25,
    paddingLeft: 25,
    backgroundColor: '#F8F8F8',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  }
};

export default SearchBar;
