import React, { Component, ElementType } from 'react';
import { Link, NavLink, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Col, Container, Nav, NavItem, Row } from 'reactstrap';
import logo from '../../assets/logo.png';
import { Icon } from '../../common/Icon/Icon';
import { INavConfig, IRouteConfig } from '../../common/Router/router.types';
import './PanelLayout.scss';

interface IProps {
  routes: IRouteConfig[];
  nav: INavConfig[];
}

interface IState {
  navBarCollapsed: boolean;
}

export class PanelLayout extends Component<IProps, IState> {
  public state = {
    navBarCollapsed: false,
  };

  public render() {
    const { renderTransition, toggleMenu } = this;
    const { nav } = this.props;
    const { navBarCollapsed } = this.state;

    return (
      <Row className="panel">
        <Col xs="2" className={`side-panel${navBarCollapsed ? ' collapsed' : ''}`}>
          <div className="d-flex align-items-start justify-content-between">
            <Link to="/" className="logo">
              <img src={logo} alt="PowerCMS" className="logo-image" />
            </Link>
            <button className="d-flex d-md-none navbar-toggler" type="button" onClick={toggleMenu()}>
              <Icon name="Menu" />
            </button>
          </div>
          <Nav vertical={true} className="side-panel__nav">
            {nav.map((config: INavConfig, index: number) => (
              <NavItem key={index}>
                <NavLink to={config.path} className="nav-link d-flex align-items-center" onClick={toggleMenu(true)}>
                  <Icon name={config.icon} size={22} />
                  {config.title}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Col>
        <Col xs="10" className="content">
          <Switch>
            <Route render={renderTransition} />
          </Switch>
        </Col>
      </Row>
    );
  }

  private renderTransition = ({ location }: any) => {
    const { renderRoute } = this;
    const { routes } = this.props;
    return (
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={200}>
          <Switch location={location}>
            {routes.map(({ component, ...route }: IRouteConfig, index: number) => (
              <Route key={index} {...route} render={renderRoute(component, route.props)} />
            ))}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  };

  private renderRoute = (RouteComponent: ElementType, routeProps: any) => (props: RouteComponentProps) => (
    <div className="content-page">
      <Container>
        <RouteComponent {...props} {...routeProps || {}} />
      </Container>
    </div>
  );

  private toggleMenu = (value: boolean = this.state.navBarCollapsed) => () => {
    this.setState({
      navBarCollapsed: !value,
    });
  };
}
