import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Spinner, FooterButton } from '../common';
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

  renderMovieDetail() {
    if(this.props.movie.title) {
      return (
        <View style={ styles.containerStyle }>

        <View style={ styles.scrollStyle }>
          <View style={ styles.headerContentStyle }>
            <Text style={ styles.headerTextStyle }>{ this.props.movie.title }</Text>
          </View>

          <View style={ styles.services }>
            { this.renderStreamServices() }
          </View>
        </View>
        </View>
      )
    } else {
      return (
        <Spinner />
      )
    }
  }

  // TODO: add image support
  render() {
    return (
      <View style={styles.containerStyle}>
        <NavBar backAction={Actions.pop} />

        { this.renderMovieDetail() }
        <View style={ styles.footer }>
          <FooterButton buttonAction={ () => Actions.splash() }>
            Home
          </FooterButton>
          <FooterButton buttonAction={ () => Actions.userForm() }>
            Profile
          </FooterButton>
        </View>
      </View>
    );
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
  scrollStyle: {
    margin: 25,
    padding: 10,
    backgroundColor: '#F8F8F8',
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
    },
    flex: 1
  },
  footer: {
    height: 60,
    padding: 10,
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    }
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
