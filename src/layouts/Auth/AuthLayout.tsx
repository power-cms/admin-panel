import React, { Component, ElementType } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { IRouteConfig } from '../../common/Router/router.types';
import './AuthLayout.scss';

interface IProps {
  routes: IRouteConfig[];
}

export class AuthLayout extends Component<IProps> {
  public render() {
    const { renderRoute } = this;
    const { routes } = this.props;

    return (
      <div className="login d-flex align-items-center justify-content-center">
        <div className="box box-static box--lg">
          <div className="logo d-flex justify-content-center align-items-center">
            <img src={logo} alt="PowerCMS" />
          </div>
          <Switch>
            {routes.map(({ component, ...route }: IRouteConfig, index: number) => (
              <Route key={index} {...route} render={renderRoute(component, route.props)} />
            ))}
          </Switch>
        </div>
      </div>
    );
  }

  private renderRoute = (RouteComponent: ElementType, routeProps: any) => (props: RouteComponentProps) => (
    <RouteComponent {...props} {...routeProps || {}} />
  );
}
