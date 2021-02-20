import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Login';
import HeaderBar from '../HeaderBar';

// const Login = lazy(() => import('../Login'))
// const Dashboard = lazy(() => import('../Dashboard'))

const renderStartPage = () => {
  return <Redirect to="dashboard" />
}

const Root = () => {
  return (
    <Switch>
      <Suspense fallback={null}>
        <Route exact path="/" render={renderStartPage} />
        <Route path="/dashboard" render={routeProps => <HeaderBar {...routeProps} />} />
        <Route path="/login" component={Login} />
      </Suspense>
    </Switch>
  )
}

export default Root;
