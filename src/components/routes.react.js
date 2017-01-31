import React from 'react';
import { Scene, Router, Action } from 'react-native-router-flux';

import { Header, Button } from './common';

const Routes = () => (
  <Router>
    <Scene key='splash' component={ Header } title="Eezee" initial />
    <Scene key='result' component={ Button } title='Result' />
  </Router>
);

export default Routes;
