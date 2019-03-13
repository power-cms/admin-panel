import React, { Component } from 'react';
import { Redirect } from 'react-router';

interface IProps {
  logout: () => void;
  redirectLink: string;
}

export class Logout extends Component<IProps> {
  public componentDidMount() {
    this.props.logout();
  }

  public render() {
    const { redirectLink } = this.props;

    return <Redirect to={redirectLink} />;
  }
}
