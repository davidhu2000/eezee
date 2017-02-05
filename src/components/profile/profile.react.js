import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { Footer } from '../common';
import Navbar from '../navbar/navbar.react';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentWillMount() {
    if(!this.props.loggedIn) {
      Actions.loginForm();
    }
  }

  render() {
    return (
      <View style={ styles.viewStyle }>
        <Navbar />
        <View style={ styles.containerStyle }>
          <Text style={{fontSize: 20, color: '#3B5998', alignSelf: 'center', fontWeight: '600'}}>
            Welcome to eZ
          </Text>
          <Text style={{fontSize: 15, color: '#3B5998', padding: 5}}>
            The simplest tool for finding the movie you want to stream online. Enter the movie you'd like to find into the search bar on the top of the screen to start. Thank you for checking us out and if you enjoy our service - please share us with your friends!
          </Text>
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    justifyContent: 'space-between',
    flex: 1
  },
  containerStyle: {
    marginLeft: 25,
    marginRight: 25,
    padding: 25,
    backgroundColor: '#F8F8F8',
    // height: 250,
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    }
  },
  usernameStyle: {

  },
  textStyle: {

  }
};

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
