import React from 'react';
import { connect } from 'react-redux';
import { Text, View, Image, Linking } from 'react-native';
import { SearchInput, Button, Footer } from '../common';
import { Actions } from 'react-native-router-flux';
import NavBar from '../navbar/navbar.react';

class Splash extends React.Component {
  componentWillMount() {
    if(this.props.loggedIn) {
      Actions.searchResults();
    }
  }

  render() {
    return (
      <Image style={styles.background} source={require('../../../images/oldy.jpg')}>
      <View style={ styles.pageStyle }>
        <NavBar />
        <View style={ styles.searchStyle }>
          <Text style={{fontSize: 20, color: '#3B5998', alignSelf: 'center', fontWeight: '600'}}>
            Welcome to eZ
          </Text>
          <Text style={{fontSize: 15, color: '#3B5998', padding: 5}}>
            The simplest tool for finding the movie you want to stream online. Create an account or start your search.
          </Text>

          <Button buttonAction={ () => Actions.signupForm() }>
            Sign Up
          </Button>
          <Button buttonAction={ () => Actions.loginForm() }>
            Login
          </Button>
        </View>
        <Footer />
      </View>
      </Image>
    );
  }
}

const styles = {
  pageStyle: {
    flex: 1,
    justifyContent: 'space-between'
  },
  searchStyle: {
    justifyContent: 'space-around',
    marginLeft: 25,
    marginRight: 25,
    padding: 25,
    backgroundColor: '#F8F8F8',
    height: 250,
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    }
  },
  background: {
    flex: 1,
    // alignSelf: 'stretch',
    width: null,
    height: null
  }
};

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
