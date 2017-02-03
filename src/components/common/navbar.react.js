import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { CardSection, Card, Input, Button, SearchInput } from '../common';
import { receiveQuery } from '../../actions/queries_actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.receiveQuery(this.state.query);
    Actions.searchResults();
  }

  render() {
    return (
      <View style={ styles.footer }>
        <Text style={{flex: 1, fontSize: 20, color: '#3B5998', paddingLeft: 20}} onPress={ () => Actions.splash() }>Home</Text>
          <SearchInput
             label="Search"
             placeholder="Movie Name"
             onChangeText={ query => this.setState({ query }) }
             onSubmitEditing={ this.handleSubmit }
           />
      </View>
    );
  }
}

const styles = {
  footer: {
    height: 70,
    paddingTop: 20,
    paddingRight: 25,
    paddingLeft: 25,
    backgroundColor: '#F8F8F8',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  }
};

const mapStateToProps = ({ query }) => ({
  query
});

const mapDispatchToProps = dispatch => ({
  receiveQuery: query => dispatch(receiveQuery(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
