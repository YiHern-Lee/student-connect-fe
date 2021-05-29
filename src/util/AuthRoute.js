import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route
        {...rest}
        // if authenticated, redirect to home page, else redirect to either login or signup page
        render={(props) => authenticated === true ? <Redirect to='/' /> : <Component {...props} />}
    />
)

export default AuthRoute;