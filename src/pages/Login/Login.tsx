import { Field } from '@power-cms/react-kit';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'reactstrap';
import { Error } from '../../common/Forms/Error';
import { Input } from '../../common/Forms/Input';

interface IProps {
  handleSubmit: () => {};
  error?: string;
}

export class Login extends Component<IProps> {
  public render() {
    const { handleSubmit, error } = this.props;

    return (
      <div>
        <Form onSubmit={handleSubmit} noValidate={true}>
          <Field component={Input} icon="User" name="login" placeholder="Login" />
          <Field component={Input} icon="Lock" name="password" type="password" placeholder="Password" />
          <Error message={error} />
          <div className="d-flex justify-content-between">
            <Button color="primary" className="px-4">
              Login
            </Button>
            <Link to="/auth/forgot_password">
              <Button color="link" className="px-0">
                Forgot password?
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    );
  }
}
