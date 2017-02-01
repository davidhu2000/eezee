import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import SearchResultItem from './search_results_item';
import axios from 'axios';

class SearchResults extends React.Component {

  constructor() {
    super();
    this.state = {
      search_results: []
    };
  }

  componentWillMount() {

    //TODO figure out how to access guidebox API
    // axios.get('')
    //   .then(response => this.setState({ search_results: response.data }));
  }


  renderSearchResults() {
    // TODO add SearchResultItem attributes here
    return this.state.search_results.map(result_item =>
       <SearchResultItem key={ result_item.title } resultItem={ result_item } />
    );
  }

  render() {
    return (
      <ScrollView style={ styles.scrollStyle }>
        { this.renderSearchResults() }
      </ScrollView>
    );
  }
}

const styles = {
  scrollStyle: {

  //TODO add scrollStyle here, or don't

  }
};

export default SearchResults;
