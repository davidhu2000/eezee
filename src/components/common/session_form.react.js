import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Input, Button} from './../common';
import { login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/errors_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  renderErrors() {
    if(this.props.errors[0]) {
      return (
        <View style={ styles.errorStyle }>
          <Text>
            { this.props.errors[0] }
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={ styles.formStyle }>
        { this.renderErrors() }

        <Input
           label="Email"
           placeholder="email@gmail.com"
           onChangeText={this.props.updateEmail}
           value={this.props.email}
         />

        <Input
           label="Password"
           placeholder="password"
           onChangeText={this.props.updatePassword}
           value={this.props.password}
           secureTextEntry
        />

      <Button buttonAction={ () => this.props.action({email: this.props.email, password: this.props.password}) }>
          { this.props.buttonValue }
        </Button>

        <View style={ styles.btmbtn }>
          <Text>Don't have an account?</Text>

          <Text style={{textDecorationLine: 'underline', color: '#3B5998'}} onPress={ () => {
              this.props.clearErrors();
              this.props.linkAction();
          }}>
            { this.props.buttonValue == 'Login' ? 'Signup' : 'Login' }
          </Text>
        </View>
      </View>
    );
  }
}

const styles = {
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
  pageStyle: {
    flex: 1,
    justifyContent: 'space-between'
  },
  errorStyle: {
    position: 'absolute',
    top: -50
  }
};

export { SessionForm };
