import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Spinner } from '../common';
import api from '../../../guidebox_api';
import NavBar from '../common/navbar.react';

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
      <View style={ styles.service } key={ st.display_name }>
        <Text>{ st.display_name }</Text>
      </View>
    ));
  }

  // TODO: add image support
  render() {
    if(this.props.movie.title) {
      return (
        <View style={styles.containerStyle}>
          <NavBar />

          <View style={ styles.resultdetails }>

            <View style={ styles.headerContentStyle }>
              <Text style={ styles.headerTextStyle }>{ this.props.movie.title }</Text>
            </View>

            <View style={ styles.services }>
              { this.renderStreamServices() }
            </View>

          </View>

          <View style={ styles.footer }>
            <Text style={{fontSize: 20, color: '#3B5998'}} onPress={ () => Actions.splash() }>Home</Text>
            <Text style={{fontSize: 20, color: '#3B5998'}} onPress={ () => Actions.userForm() }>Profile</Text>
          </View>
        </View>
      );
      } else {
      return (
        <Spinner />
      );
    }

  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'space-between'
  },
  headerContentStyle: {
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    }
  },
  services: {
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    }
  },
  service: {
    margin: 10
  },
  headerTextStyle: {
    fontSize: 18,
    alignSelf: 'center'
  },
  resultdetails: {
    margin: 25,
    padding: 10,
    justifyContent: 'space-around',
    backgroundColor: '#F8F8F8',
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    }
  },
  footer: {
    height: 50,
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
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