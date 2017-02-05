import React from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import NavBar from '../navbar/navbar.react';
import { Footer, SessionForm } from '../common';

import { signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/errors_actions';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.update = this.update.bind(this);
  }

  componentWillMount() {
    if(this.props.loggedIn) {
      Actions.searchResults();
    }
  }

  update(field) {
    return text => {
      this.setState({
        [field]: text
      });
    };
  }

  render() {
    return (
      <Image style={styles.background} source={require('../../../assets/images/background.jpg')}>
        <View style={ styles.pageStyle }>
          <NavBar />
          <SessionForm
            errors={this.props.errors}
            action={this.props.signup}
            clearErrors={this.props.clearErrors}
            linkAction={ Actions.loginForm }
            updateEmail={this.update('email')}
            updatePassword={this.update('password')}
            email={this.state.email}
            password={this.state.password}
            buttonValue={'Signup'}
          />
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
  background: {
    flex: 1,
    alignSelf: 'stretch',
    width: null
  }
};

const mapStateToProps = ({ session, errors }) => ({
  user: session.currentUser,
  loggedIn: Boolean(session.currentUser),
  errors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
