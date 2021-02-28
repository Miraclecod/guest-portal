import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HeaderBar from '../HeaderBar';
import Footer from '../Footer';
import Login from '../Login';

// const Login = lazy(() => import('../Login'))
// const Dashboard = lazy(() => import('../Dashboard'))

const renderStartPage = () => {
  return <Redirect to="dashboard" />
}

const Root = () => {
  return (
    <>
    <Switch>
      <Suspense fallback={null}>
        <Route exact path="/" render={renderStartPage} />
        <Route path="/dashboard" render={routeProps => <HeaderBar {...routeProps} />} />
        <Route path="/login" component={Login} />
      </Suspense>
    </Switch>
    <Footer />
    </>
  )
}

export default Root;
