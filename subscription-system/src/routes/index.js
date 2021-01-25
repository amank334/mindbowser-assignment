import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes'
import ManagerHome from '../components/home/ManagerHome';
import SubscriptionPlans from '../components/home/SubscriptionPlans';
import Login from '../components/login/Login'
import Register from '../components/register/Register';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/home" exact component={ManagerHome} isPrivate />
      <Route path="/plans" exact component={SubscriptionPlans}  />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Login} />
    </Switch>
  );
}