import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from '../Footer';
import Login from '../Login'

// const Login = lazy(() => import('../Login'))
// const Dashboard = lazy(() => import('../Dashboard'))

const Root = () => {
  return (
    <>
      <Switch>
        <Suspense fallback={null}>
          <Route path="/login" component={Login} />
        </Suspense>
      </Switch>
      <Footer />
    </>
  )
}

export default Root;
