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
    height: 40
  },
  inputStyle: {
    backgroundColor: '#f8f8f8',
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    height: 30,
    paddingLeft: 5
  }
};

export default SearchBar;
