import React from 'react';
import { Provider } from 'react-redux';
import {
  Text,
  View
} from 'react-native';

import Header from './common/header.react';
import SearchBar from './search/search_bar.react';

class App extends React.Component {

  render() {
    return (
      <View>
        <Header text={'Eezee'} />
        <SearchBar />
      </View>
    );
  }
}

export default App;
