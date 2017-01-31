import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { CardSection, Card, Input, Button } from '../common';
import { login } from '../../actions/session_actions';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
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
      )
    }
  }

  render() {
    return (

    <View style={ styles.viewStyle }>
      <View style={ styles.formStyle }>
        { this.renderErrors() }

        <Input
           label="Email"
           placeholder="email@gmail.com"
           onChangeText={this.update('email')}
           value={this.state.email}
         />

        <Input
           label="Password"
           placeholder="password"
           onChangeText={this.update('password')}
           value={this.state.password}
           secureTextEntry
         />


        <Button buttonAction={ () => this.props.login(this.state) }>
          Log In
        </Button>

        <Button buttonAction={ () => Actions.signupForm() }>
          { "Don't have an account? Sign up" }
        </Button>
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
  formStyle: {
    marginTop: 100,
    marginLeft: 25,
    marginRight: 25,
    padding: 25,
    backgroundColor: '#F8F8F8',
    height: 225
  }
};

const mapStateToProps = ({ session, errors }) => ({
  user: session.currentUser,
  loggedIn: Boolean(session.currentUser),
  errors
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
