import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import SearchResultItem from './search_results';

class SearchResults extends React.Component {




  render() {
    console.log(this.state);

    renderSearchResultItems() {
      return this.state.search_result_item.map(album =>
        <AlbumDetail key={album.title} album={album} />
      );
    }

    return (
      <ScrollView>
        {this.()}
      </ScrollView>
    );
  }
}

export default ;
