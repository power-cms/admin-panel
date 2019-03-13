import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../Icon/Icon';

interface IAction {
  icon: string;
  link: string;
}

interface IProps {
  title: string;
  actions?: IAction[];
}

export class BasePage extends Component<IProps> {
  public render() {
    const { title, children, actions } = this.props;

    return (
      <div>
        <div className="heading d-flex align-items-center justify-content-between">
          <h1>{title}</h1>
          {actions &&
            actions.map((action: IAction, index: number) => {
              return (
                <NavLink key={index} to={action.link} className="fab">
                  <Icon name={action.icon} size={20} />
                </NavLink>
              );
            })}
        </div>
        {children}
      </div>
    );
  }
}
