import React, { Component, ReactElement } from 'react';
import './Box.scss';

interface IProps {
  title: string | ReactElement;
  subtitle?: string | ReactElement;
  avatar?: string | ReactElement;
  size?: string;
}

export class Box extends Component<IProps> {
  public boxClass = () => {
    const { size } = this.props;
    const classes = ['box', this.props.size];

    if (size) {
      classes.push(`box-${size}`);
    }

    return classes.join(' ');
  };

  public isImageAvatar = () => {
    const { avatar } = this.props;

    return typeof avatar === 'string';
  };

  public render() {
    const { avatar, title, subtitle } = this.props;
    const { boxClass, isImageAvatar } = this;

    return (
      <div className={`${boxClass()} d-flex align-items-center`}>
        {avatar && (
          <div className="box-avatar d-flex align-items-center justify-content-center">
            {isImageAvatar() && <img src={avatar as string} alt="" />}
            {!isImageAvatar() && avatar}
          </div>
        )}
        <div className="box-desc">
          <div className="box-title">{title}</div>
          {subtitle && <div className="box-subtitle">{subtitle}</div>}
        </div>
      </div>
    );
  }
}
