import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { CardSection, Card, Input, Button } from '../common';
import { signup } from '../../actions/session_actions';

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
    // console.log(this.state);
    return (
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


        <Button buttonAction={ () => this.props.signup(this.state) }>
          Signup
        </Button>

        <Button buttonAction={ () => Actions.userForm() }>
          { "Already have an account? Login" }
        </Button>

      </View>
    );
  }
}

const styles = {
  formStyle: {
    height: 200
  }
};

const mapStateToProps = ({ session, errors }) => ({
  user: session.currentUser,
  loggedIn: Boolean(session.currentUser),
  errors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
