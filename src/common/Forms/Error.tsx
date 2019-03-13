import * as React from 'react';

interface IFormError {
  message?: string;
}

export const Error = ({ message }: IFormError) =>
  message ? <span className="invalid-feedback">{message}</span> : null;
