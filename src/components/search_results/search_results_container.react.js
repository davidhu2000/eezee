import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import NavBar from '../navbar/navbar.react';
import SearchResultItem from './search_results_item.react';
import api from '../../../guidebox_api';
import { Spinner, Footer } from '../common';

import { receiveAllMovies } from '../../actions/movies_actions';

class SearchResults extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: props.query
    };

    this.renderSearchResults = this.renderSearchResults.bind(this);
  }

  queryMovies(query) {
    let url = `https://api-public.guidebox.com/v2/search?api_key=${api}&type=movie&field=title&precision=fuzzy&query=${query}`

    fetch(url)
    .then(
      res => res.json()
    ).then(
      resJson => {
        let movies = resJson.results;

        let titles = [];
        movies = movies.filter( movie => {
          let noteIncluded = titles.indexOf(movie.title) === -1
          titles.push(movie.title)
          return noteIncluded;
        });

        if(movies && movies.length > 5) {
          movies = movies.slice(0, 5);
        }
        this.props.receiveAllMovies(movies || []);
      }
    ).catch(
      err => console.log(err)
    );
  }

  // TODO: check for query from search
  componentWillMount() {
    this.queryMovies(this.props.query);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.query !== newProps.query) {
      this.queryMovies(newProps.query);
    }
  }

  renderSearchResults() {
    // TODO add SearchResultItem attributes here
    return this.props.movies.map( movie => {
      return (
        <TouchableOpacity key={ movie.title }  onPress={ () => Actions.movieDetail({ title: movie.title, movieId: movie.id }) }>
          <SearchResultItem movieId={ movie.id } title={ movie.title } poster={ movie.poster_120x171 }/>
        </TouchableOpacity>
      );
    });
  }

  renderMovieList() {
    if(this.props.movies.length > 0) {
      return (
        <View style={ styles.pageStyle }>

          <View style={ styles.scrollStyle }>
            { this.renderSearchResults() }
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
      <View style={ styles.pageStyle }>
        <NavBar />

        { this.renderMovieList() }

        <Footer />

      </View>
    );
  }
}

const styles = {
  pageStyle: {
    flex: 1,
    justifyContent: 'space-between'
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
  }
};

const mapStateToProps = state => ({
  movies: state.movies.index,
  query: state.queries
});

const mapDispatchToProps = dispatch => ({
  receiveAllMovies: movies => dispatch(receiveAllMovies(movies))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
