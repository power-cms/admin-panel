import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export class ForgotPassword extends Component {
  public render() {
    return (
      <div>
        Not implemented for demo purpose :).
        <div className="text-center">
          <Link to="/auth/login">
            <Button color="link" className="px-0">
              Back to login
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
