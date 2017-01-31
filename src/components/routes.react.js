import React from 'react';
import { Scene, Router, Action } from 'react-native-router-flux';

import { Header, Button } from './common';

import UserForm from './user_form/user_form.react';
import SignupForm from './user_form/signup_form.react';

const Routes = () => (
  <Router sceneStyle={{ paddingTop: 65, backgroundColor: 'white' }}>
    <Scene
      key='splash'
      component={ Header }
      title="Eezee"
    />

    <Scene
      key='result'
      component={ Button }
      title='Result'
    />

    <Scene
      key='userForm'
      component={ UserForm }
      title='Form'
      initial
    />

    <Scene
      key='signupForm'
      component={ SignupForm }
      title='SignupForm'
    />

  </Router>
);

export default Routes;
