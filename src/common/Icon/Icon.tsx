import React, { Component } from 'react';
import * as FeatherIcon from 'react-feather';

interface IProps {
  name: string;
  size?: string | number;
  color?: string;
}

export class Icon extends Component<IProps> {
  public render() {
    const { name, size, color } = this.props;
    const ChosenIcon = (FeatherIcon as any)[name];

    return <ChosenIcon size={size} color={color} />;
  }
}
