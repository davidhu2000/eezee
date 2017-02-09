import React from 'react';
import { Scene, Router, Action } from 'react-native-router-flux';
import { Header, Button, Navbar } from './common';
import Splash from './splash/splash.react';
import LoginForm from './user_form/login_form.react';
import SignupForm from './user_form/signup_form.react';
import Profile from './profile/profile.react';
import SearchResults from './search_results/search_results_container.react';
import SearchResultDetail from './search_results/search_result_detail.react';

const Routes = () => (
  <Router sceneStyle={{ backgroundColor: '#3B5998' }}>
    <Scene
      key='splash'
      component={ Splash }
      title="Welcome"
      hideNavBar={true}
      initial
    />

    <Scene
      key='loginForm'
      component={ LoginForm }
      title='Login'
      hideNavBar={true}
    />

    <Scene
      key='signupForm'
      component={ SignupForm }
      title='Sign Up'
      hideNavBar={true}
    />

    <Scene
      key='profile'
      component={ Profile }
      title='Profile'
      hideNavBar={true}
    />

    <Scene
      key='searchResults'
      component={ SearchResults }
      title='Search Results'
      hideNavBar={true}

    />

    <Scene
      key='movieDetail'
      component={ SearchResultDetail }
      title='Movie'
      hideNavBar={true}
    />
  </Router>
);

export default Routes;
