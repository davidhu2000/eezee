import React from 'react';
import { Scene, Router, Action } from 'react-native-router-flux';
import { Header, Button } from './common';
import Splash from './splash/splash.react';
import LoginForm from './user_form/login_form.react';
import SignupForm from './user_form/signup_form.react';
import SearchResults from './search_results/search_results_container.react';
import SearchResultDetail from './search_results/search_result_detail.react';

const Routes = () => (
  <Router sceneStyle={{ backgroundColor: '#3B5998' }}>
    <Scene
      key='splash'
      component={ Splash }
      title="Welcome"
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
    />

    <Scene
      key='searchResults'
      component={ SearchResults }
      title='Search Results'
      initial
    />

    <Scene
      key='movieDetail'
      component={ SearchResultDetail }
      title='Movie'
    />

  </Router>
);

export default Routes;
