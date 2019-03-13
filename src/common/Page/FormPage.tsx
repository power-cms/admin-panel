import { Field, IFormProps } from '@power-cms/react-kit';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Form, Row } from 'reactstrap';
import { Error } from '../Forms/Error';
import { Input } from '../Forms/Input';
import { BasePage } from './BasePage';

export interface IFormPageProps {
  getData?: () => void;
  match?: any;
  backLink?: string;
}

interface IProps extends IFormProps, IFormPageProps {}

export interface IFormInput {
  name: string;
  placeholder: string;
  type?: string;
  options?: any;
}

export abstract class FormPage extends Component<IProps> {
  public static defaultProps = {
    initialValues: {},
  };
  public abstract form: IFormInput[][];
  public abstract title: string;

  public componentDidMount() {
    if (this.props.getData) {
      this.props.getData();
    }
  }

  public render() {
    const { handleSubmit, error, backLink } = this.props;
    const { form, title } = this;

    return (
      <BasePage title={title}>
        <Form onSubmit={handleSubmit} noValidate={true}>
          {form.map((row: IFormInput[], rowIndex: number) => (
            <Row key={rowIndex}>
              {row.map((input: IFormInput, inputIndex: number) => (
                <Col key={inputIndex} xs="12" sm={12 / row.length}>
                  <Field component={Input} {...input} />
                </Col>
              ))}
            </Row>
          ))}
          <Error message={error} />
          <Row>
            <Col className="d-flex justify-content-between">
              <Button color="success">Save</Button>
              {backLink && (
                <Link to={backLink}>
                  <Button type="button" color="link">
                    Back
                  </Button>
                </Link>
              )}
            </Col>
          </Row>
        </Form>
      </BasePage>
    );
  }
}
