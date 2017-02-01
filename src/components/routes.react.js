import React from 'react';
import { Scene, Router, Action } from 'react-native-router-flux';

import { Header, Button } from './common';

import LoginForm from './user_form/login_form.react';
import SignupForm from './user_form/signup_form.react';
import SearchResults from './search_results/search_results_container.react';

const Routes = () => (
  <Router sceneStyle={{ backgroundColor: '#3B5998' }}>
    <Scene
      key='splash'
      component={ Header }
      title="Welcome"
    />

    <Scene
      key='result'
      component={ Button }
      title='Search'
    />

    <Scene
      key='userForm'
      component={ LoginForm }
      title='Login'
    />

    <Scene
      key='signupForm'
      component={ SignupForm }
      title='Sign Up'
      initial
    />

    <Scene
      key='searchResults'
      component={ SearchResults }
      title='Search Results'
      initial
    />

  </Router>
);

export default Routes;
