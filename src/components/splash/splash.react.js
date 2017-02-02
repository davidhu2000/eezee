import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { SearchInput, Button } from '../common';
import { Actions } from 'react-native-router-flux';
import NavBar from '../common/navbar.react';
// import { Card, CardSection, Button } from '../common/index';

const Splash = () => {

  return (
    <View style={ styles.pageStyle }>
     <NavBar />
     <View style={ styles.searchStyle }>
        <Text style={{fontSize: 20, color: '#3B5998', alignSelf: 'center', fontWeight: '600'}}>Welcome to eZ</Text>
        <Text style={{fontSize: 15, color: '#3B5998', padding: 5}}>The simplest tool for finding the movie you want to stream online. Create an account or start your search.</Text>
        <Button buttonAction={ () => Actions.signupForm() }>
          Sign Up
        </Button>
        <Button buttonAction={ () => Actions.userForm() }>
          Login
        </Button>
     </View>
     <View style={ styles.footer }>
       <View style={ styles.footerbutton }>
         <Text style={ styles.footertext } onPress={ () => Actions.splash()} >Home</Text>
       </View>
       <View style={ styles.footerbutton }  >
         <Text style={ styles.footertext } onPress={ () => Actions.userForm()} >Profile</Text>
       </View>
     </View>
    </View>
  );
};

const styles = {
  pageStyle: {
    flex: 1,
    justifyContent: 'space-between'
  },
  searchStyle: {
    justifyContent: 'space-around',
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
  },
  footerbutton: {
    width: 150,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 2,
    backgroundColor: '#3B5998',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    }
  },
  footertext: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center'
  }
};

export default Splash;
