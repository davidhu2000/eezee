import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
// import { Card, CardSection, Button } from '../common/index';


class SearchResultItem extends React.Component {
  constructor(props){
    super(props);
  }
  // TODO: add image support
  render() {
    return (
        <View style={ styles.headerContentStyle }>
          <Text style={ styles.headerTextStyle }>{ this.props.title }</Text>
        </View>
    );
  }
}

const styles = {
  headerContentStyle: {
    height: 50,
    margin: 10,
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    },
    justifyContent: 'center'
  },
  headerTextStyle: {
    fontSize: 18,
    alignSelf: 'center'
  },
  imageStyle: {
    height: 50,
    width: 50
  },
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default SearchResultItem;
