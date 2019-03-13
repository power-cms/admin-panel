import React, { Component } from 'react';
import { Alert } from 'reactstrap';

interface IProps {
  data: any[];
  isLoading: boolean;
}

export class DataHolder extends Component<IProps> {
  public static defaultProps = {
    data: [],
    isLoading: true,
  };

  public render() {
    const { children, data, isLoading } = this.props;

    if (!isLoading && data.length === 0) {
      return (
        <Alert color="dark" className="d-flex justify-content-center align-items-center pb-5 pt-5">
          <i className="display-4 icon-hourglass mr-3" />
          <div>
            <h4>No data yet :(</h4>
            <div>Add some fresh content!</div>
          </div>
        </Alert>
      );
    }

    return children;
  }
}
