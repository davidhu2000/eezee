import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import SearchResultItem from './search_results_item.react';
import api from '../../../guidebox_api';

class SearchResults extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: []
    };

    this.renderSearchResults = this.renderSearchResults.bind(this);
  }

  componentWillMount() {

    let query = 'Batman';

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
        this.setState({ movies });
      }
    ).catch(
      err => console.log(err)
    );

  }


  renderSearchResults() {
    // TODO add SearchResultItem attributes here
    return this.state.movies.map( movie => {
      return (<TouchableOpacity key={ movie.title }  onPress={ () => Actions.movieDetail({ title: movie.title }) }>
        <SearchResultItem movieId={ movie.id } title={ movie.title } poster={ movie.poster_120x171 }/>
      </TouchableOpacity>)
    });
  }

  render() {
    return (
    <View style={ styles.pageStyle }>
      <ScrollView style={ styles.scrollStyle }>
        { this.renderSearchResults() }
      </ScrollView>
    </View>
    );
  }
}

const styles = {
  pageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  scrollStyle: {
    marginTop: 80
  }
};

export default SearchResults;
