import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import NavBar from '../navbar/navbar.react';
import { CardSection, Card, Input, Button, SearchInput, Footer, SessionForm } from '../common';
import { signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/errors_actions';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
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

  renderErrors() {
    if(this.props.errors[0]) {
      return (
        <Text>
          { this.props.errors[0] }
        </Text>
      );
    }
  }

  render() {
    // console.log(this.state);
    return (
      <View style={ styles.pageStyle }>
        <NavBar />
          <SessionForm
            errors={this.props.errors}
            action={this.props.signup}
            clearErrors={this.props.clearErrors}
            linkAction={ Actions.loginForm }
            update={this.update}
            email={this.state.email}
            password={this.state.password}
            buttonValue={'Signup'}
          />
        <Footer />
      </View>
    );
  }
}

const styles = {
  pageStyle: {
    flex: 1,
    justifyContent: 'space-between'
  },
  formStyle: {
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
  btmbtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 20
  },
  footer: {
    height: 60,
    padding: 10,
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    }
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
