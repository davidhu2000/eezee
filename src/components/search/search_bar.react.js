import React from 'react';
import { TextInput, View } from 'react-native';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
  }

  render() {
    console.log(this.state.query);
    return (
      <View style={ styles.viewStyle }>
        <TextInput
          style={ styles.inputStyle }
          onChangeText={ query => this.setState({ query }) }
          placeholder={'search for movies'}
          placeholderColor={'#fff'} />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    marginTop: 40,
    height: 45
  },
  inputStyle: {
    backgroundColor: '#f8f8f8',
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    height: 45,
    width: 300
  }
};

export default SearchBar;
