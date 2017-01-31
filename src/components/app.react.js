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
        <View style={styles.searchArea}>
          <Text style={styles.textStyle}>Eezee</Text>
          <SearchBar />
        </View>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: '#3B5998'
  },
  textStyle: {
    color: '#fff',
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 60
  },
  searchArea: {
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default App;
