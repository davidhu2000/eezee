import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import SearchResultItem from './search_results_item.react';
import axios from 'axios';
import api from '../../../guidebox_api';

class SearchResults extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount() {

    let query = 'Batman';

    let url = `https://api-public.guidebox.com/v2/search?api_key=${api}&type=movie&field=title&precision=fuzzy&query=${query}`

    fetch(url)
    .then(
      res => res.json()
    ).then(
      resJson => {

        let movies = resJson.results;
        if(movies.length > 5) {
          movies = movies.slice(0, 5);
        }

        this.setState({ movies });
      }
    ).catch(
      err => console.log(err)
    )

  }


  renderSearchResults() {
    // add SearchResultItem attributes here
    return this.state.movies.map(result_item =>
       <SearchResultItem key={ result_item.title } resultItem={ result_item } />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView style={ styles.scrollStyle }>
        { this.renderSearchResults() }
      </ScrollView>
    );
  }
}

const styles = {
  scrollStyle: {
    marginTop: 70

  }
};

export default SearchResults;
