import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { CardSection, Card, Input } from '../common';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  render() {
    console.log('userForm Component');
    return (
      <View style={ styles.formStyle }>
        <Card>
          <CardSection>
            <Input
               label="Email"
               placeholder="email@gmail.com"
               onChangeText={this.update('email')}
               value={this.state.email}
             />
          </CardSection>

          <CardSection>
            <Input
               label="Password"
               placeholder="password"
               onChangeText={this.update('password')}
               value={this.state.email}
             />
          </CardSection>

          <CardSection>

          </CardSection>

        </Card>

      </View>
    );
  }
}

const styles = {
  formStyle: {
    marginTop: 200,
    borderWidth: 1,
    borderColor: '#000'
  }
};

export default UserForm;
