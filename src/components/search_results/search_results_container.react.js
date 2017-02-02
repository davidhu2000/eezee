import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import NavBar from '../common/navbar.react';
import SearchResultItem from './search_results_item.react';
import api from '../../../guidebox_api';
import { Spinner } from '../common';

import { receiveAllMovies } from '../../actions/movies_actions';

class SearchResults extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: []
    };

    this.renderSearchResults = this.renderSearchResults.bind(this);
  }

  // TODO: check for query from search
  componentWillMount() {

    let query = 'Dead';

    let url = `https://api-public.guidebox.com/v2/search?api_key=${api}&type=movie&field=title&precision=fuzzy&query=${query}`

    fetch(url)
    .then(
      res => res.json()
    ).then(
      resJson => {
        let movies = resJson.results;
        if(movies && movies.length > 5) {
          movies = movies.slice(0, 5);
        }
        this.props.receiveAllMovies(movies);
      }
    ).catch(
      err => console.log(err)
    );

  }


  renderSearchResults() {
    // TODO add SearchResultItem attributes here
    return this.props.movies.map( movie => {
      return (<TouchableOpacity key={ movie.title }  onPress={ () => Actions.movieDetail({ title: movie.title, movieId: movie.id }) }>
        <SearchResultItem movieId={ movie.id } title={ movie.title } poster={ movie.poster_120x171 }/>
      </TouchableOpacity>);
    });
  }

  render() {
    if(this.props.movies.length > 0){
    return (
      <View style={ styles.pageStyle }>
        <NavBar />
        <ScrollView style={ styles.scrollStyle }>
          { this.renderSearchResults() }
        </ScrollView>

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
  pageStyle: {
    // alignItems: 'center',
    flex: 1
  },
  scrollStyle: {
    margin: 25,
    backgroundColor: '#F8F8F8'
  },
  footer: {
    height: 50,
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};

const mapStateToProps = state => ({
  movies: state.movies.index
});

const mapDispatchToProps = dispatch => ({
  receiveAllMovies: movies => dispatch(receiveAllMovies(movies))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
