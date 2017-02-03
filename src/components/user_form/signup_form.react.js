import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import NavBar from '../common/navbar.react';
import { CardSection, Card, Input, Button, SearchInput, FooterButton } from '../common';
import { signup } from '../../actions/session_actions';

class UserForm extends React.Component {
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
          Sign Up
        </Button>

      <View style={ styles.btmbtn }>
        <Text>Already have an account?</Text>

        <Text style={{textDecorationLine: 'underline', color: '#3B5998'}} onPress={ () => Actions.userForm() }>
          Login
        </Text>
       </View>
      </View>

      <View style={ styles.footer }>
        <FooterButton buttonAction={ () => Actions.splash() }>
          Home
        </FooterButton>
        <FooterButton buttonAction={ () => Actions.userForm() }>
          Profile
        </FooterButton>
      </View>
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
  signup: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
