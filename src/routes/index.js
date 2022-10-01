import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MyTools from '../pages/MyTools';

export default function Routes() {
  return (
    <Switch>
      <Route path="/">
        <MyTools />
      </Route>
    </Switch>
  );
}
