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
        <Text style={ styles.usernameStyle }>Test</Text>
        <Text style={ styles.textStyle }></Text>
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
