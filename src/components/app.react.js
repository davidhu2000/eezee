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
      <View style={styles.viewStyle}>
        <Header text={'Eezee'} />
        <SearchBar />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#3B5998'
  }
};

export default App;
