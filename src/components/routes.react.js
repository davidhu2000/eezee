import React from 'react';
import { Scene, Router, Action } from 'react-native-router-flux';

import { Header, Button } from './common';

import UserForm from './user_form/user_form.react';

const Routes = () => (
  <Router sceneStyle={{ paddingTop: 65 }}>
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
      title='Sign In'
      initial
    />

  </Router>
);

export default Routes;
