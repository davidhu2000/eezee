import React from 'react';
import { View, Image  } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import NavBar from '../navbar/navbar.react';
import { Footer, SessionForm } from '../common';

import { login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/errors_actions';

class LoginForm extends React.Component {
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
      <Image style={styles.background} source={require('../../../images/oldy.jpg')}>
        <View style={ styles.pageStyle }>
          <NavBar />

          <SessionForm
            errors={this.props.errors}
            action={this.props.login}
            clearErrors={this.props.clearErrors}
            linkAction={ Actions.signupForm }
            updateEmail={this.update('email')}
            updatePassword={this.update('password')}
            email={this.state.email}
            password={this.state.password}
            buttonValue={'Login'}
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
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
