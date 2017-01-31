import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { CardSection, Card, Input, Button } from '../common';

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
    return (

    <View style={ styles.viewStyle }>
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
             />

           <Button>
              Log In
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

export default UserForm;
