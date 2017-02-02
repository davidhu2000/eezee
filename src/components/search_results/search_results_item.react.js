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
      <View>
        <View style={ styles.headerContentStyle }>
          <Text style={ styles.headerTextStyle }>{ this.props.title }</Text>
        </View>

        <View style={ styles.imageContainerStyle }>
        </View>
      </View>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
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
