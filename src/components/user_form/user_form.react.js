import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';

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

  render() {
    // console.log(this.state);
    return (
      <View style={ styles.formStyle }>

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

      </View>
    );
  }
}

const styles = {
  formStyle: {
    height: 200
  }
};

const mapStateToProps = ({ session }) => ({
  user: session.currentUser,
  loggedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
