import { authContainer, Store } from '@power-cms/react-kit';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, RouteProps, Switch } from 'react-router-dom';
import { AuthRoute } from './common/Router/AuthRoute';
import { AuthLayout } from './layouts/Auth/AuthLayout';
import { PanelLayout } from './layouts/Panel/PanelLayout';
import { authRoutes, navigation, panelRoutes } from './routes';

export class App extends Component {
  public render() {
    const apiUrl = String(process.env.REACT_APP_BACKEND_ENDPOINT);

    const { renderAuthLayout, renderPanelLayout } = this;
    const AuthorizedRoutes = authContainer.auth<RouteProps>(AuthRoute);

    return (
      <Store reducers={['user', 'auth', 'site', 'settings', 'form']} apiUrl={apiUrl}>
        <Router>
          <Switch>
            <Route path="/auth" render={renderAuthLayout} />
            <AuthorizedRoutes path="/" render={renderPanelLayout} />
          </Switch>
        </Router>
      </Store>
    );
  }

  private renderAuthLayout() {
    return <AuthLayout routes={authRoutes} />;
  }

  private renderPanelLayout() {
    return <PanelLayout routes={panelRoutes} nav={navigation} />;
  }
}
