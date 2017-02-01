import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
// import { Card, CardSection, Button } from '../common/index';

class SearchResultItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    const {
      headerContentStyle,
      headerTextStyle,
      imageContainerStyle,
      imageStyle,
      containerStyle
    } = styles;

    return (
      <View style={ containerStyle }>
        <View style={ headerContentStyle }>
          <Text style={ headerTextStyle }>{ this.props.title }</Text>
        </View>

        <View style={ imageContainerStyle }>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {

  },
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
