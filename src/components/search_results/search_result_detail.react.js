import React from 'react';
import { Text, View, Image, Linking, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Spinner, FooterButton } from '../common';
import api from '../../../guidebox_api';
import NavBar from '../navbar/navbar.react';

import { receiveMovie } from '../../actions/movies_actions';
import { Footer } from '../common';

class SearchResultDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fetching: true
    };

    this.renderStreamServices = this.renderStreamServices.bind(this);
  }

  componentDidMount() {

    let url = `https://api-public.guidebox.com/v2/movies/${this.props.movieId}?api_key=${api}`;

    fetch(`${url}`)
    .then(
      res => res.json()
    ).then(
      resJson => {
        this.setState({ fetching: false });
        this.props.receiveMovie(resJson);
      }
    ).catch(
      err => console.log(err)
    );
  }

  renderIcon(st) {
    let src = st.source;
    if (src.includes('amazon')) {
      return require('../../../assets/icons/amazon_button.png');
    } else if (src.includes('netflix')) {
      return require('../../../assets/icons/netflix_button.png');
    } else if (src.includes('hulu')) {
      return require('../../../assets/icons/hulu_button.png');
    } else if (src.includes('hbo')) {
      return require('../../../assets/icons/hbo_button.png');
    } else if (src.includes('showtime')) {
      return require('../../../assets/icons/showtime_button.png');
    }
  }

  renderStreamServices() {
    if(this.props.movie.subscription_web_sources && this.props.movie.subscription_web_sources.length > 0) {
      return this.props.movie.subscription_web_sources.map( st => (
          <View style={ styles.service } key={ st.display_name }>
            <TouchableOpacity onPress={ () => Linking.openURL(st.link) }>
              <View style={ styles.icons }>
                <Image source={this.renderIcon(st)} />
              </View>
            </TouchableOpacity>
          </View>
      ));
    } else {
      return (
        <View style={ styles.service }>
          <Text>No Streaming Available</Text>
        </View>
      );
    }


  }

  renderMovieDetail() {
    if(this.props.movie.title && !this.state.fetching) {
      return (
        <View style={ styles.containerStyle }>
          <View style={ styles.contentStyle }>
            <View style={ styles.headerContentStyle }>
              <Text style={ styles.headerTextStyle }>{ this.props.movie.title }</Text>
            </View>

            <ScrollView style={ styles.services }>
              { this.renderStreamServices() }
            </ScrollView>
          </View>
        </View>
      );
    } else {
      return (
        <Spinner />
      );
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <NavBar backAction={Actions.pop} />

        { this.renderMovieDetail() }
        <Footer />
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
  contentStyle: {
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
  icons: {
    alignItems: 'center'
  }
};

const mapStateToProps = state => {
  return {
    movie: state.movies.detail
  };
};

const mapDispatchToProps = dispatch => ({
  receiveMovie: movie => dispatch(receiveMovie(movie))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultDetail);
