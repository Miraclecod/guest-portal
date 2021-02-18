import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import RequestAccess from '../RequestAccess'


const Login = lazy(() => import('../Login'))
const Dashboard = lazy(() => import('../Dashboard'))

const renderStartPage = () => {
  return <Redirect to="dashboard/portfolio-builder/easy" />
}

const Root = () => {
  return (
    <Switch>
      <Suspense fallback={null}>
        <Route exact path="/" render={renderStartPage} />
        <Route exact path="/login" component={Login} />
        <Route path="/requestAccess" component={RequestAccess} />
      </Suspense>
    </Switch>
  )
}

export default Root;
