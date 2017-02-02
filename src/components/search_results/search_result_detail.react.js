import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { connect } from 'react-redux';

import { Spinner } from '../common';
import api from '../../../guidebox_api';

import { receiveMovie } from '../../actions/movies_actions';

class SearchResultDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      movie: {}
    }

    this.renderStreamServices = this.renderStreamServices.bind(this);
  }

  componentWillMount() {

    let url = `https://api-public.guidebox.com/v2/movies/${this.props.movieId}?api_key=${api}`;

    fetch(`${url}`)
    .then(
      res => res.json()
    ).then(
      resJson => this.props.receiveMovie(resJson)
    ).catch(
      err => console.log(err)
    );

  }

  renderStreamServices() {
    return this.props.movie.subscription_web_sources.map( st => (
      <View key={ st.display_name }>
        <Text>{ st.display_name }</Text>
      </View>
    ))
  }

  // TODO: add image support
  render() {
    if(this.props.movie.title) {
      return (
        <View style={styles.containerStyle}>
          <View style={ styles.headerContentStyle }>
            <Text style={ styles.headerTextStyle }>{ this.props.movie.title }</Text>
          </View>

          <View style={ styles.imageContainerStyle }>
          </View>

          <View>
            { this.renderStreamServices() }
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

const mapStateToProps = state => {
  return {
    movie: state.movies.detail
  }
}

const mapDispatchToProps = dispatch => ({
  receiveMovie: movie => dispatch(receiveMovie(movie))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultDetail);
