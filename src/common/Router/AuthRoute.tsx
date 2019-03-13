import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const AuthRoute = ({ isAuthenticated, ...rest }: any) => {
  return isAuthenticated ? <Route {...rest} /> : <Redirect to="/auth/login" />;
};
