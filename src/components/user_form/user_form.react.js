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
    console.log(this.state);
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
               value={this.state.password}
             />
          </CardSection>

          <CardSection>
            <Button>
              Log In
            </Button>
          </CardSection>

        </Card>

      </View>
    );
  }
}

const styles = {
  formStyle: {
    borderWidth: 1,
    borderColor: '#000',
    height: 200
  }
};

export default UserForm;
