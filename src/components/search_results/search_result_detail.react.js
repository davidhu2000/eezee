import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Spinner } from '../common';
import api from '../../../guidebox_api';

class SearchResultDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      movie: {}
    }
  }

  componentWillMount() {

    let url = `https://api-public.guidebox.com/v2/movies/${this.props.movieId}?api_key=${api}`;

    fetch(`${url}`)
    .then(
      res => res.json()
    ).then(
      resJson => this.setState({ movie: resJson })
    ).catch(
      err => console.log(err)
    );

  }

  // TODO: add image support
  render() {
    if(this.state.movie.title) {
      return (
        <View style={styles.containerStyle}>
          <View style={ styles.headerContentStyle }>
            <Text style={ styles.headerTextStyle }>{ this.state.movie.title }</Text>
          </View>

          <View style={ styles.imageContainerStyle }>
          </View>
        </View>
      );
    } else {
      return (
        <Spinner />
      )
    }

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
  },
  containerStyle: {
    marginTop: 70
  }
};

export default SearchResultDetail;
