import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import MyTools from '../pages/MyTools';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={MyTools} />
    </Switch>
  );
}
