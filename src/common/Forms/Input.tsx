import * as React from 'react';
import { FormGroup, Input as ReactStrapInput, InputGroup, InputGroupAddon, InputGroupText, Label } from 'reactstrap';
import { Icon } from '../Icon/Icon';
import { Error } from './Error';
import { TextEditor } from './TextEditor';

const adaptFileEventToValue = (delegate: any) => (e: any) => delegate(e.target.files[0]);

interface IProps {
  input: any;
  meta: any;
  icon?: string;
  options?: any;
  placeholder: string;
  type: string;
}

export const Input = ({ input, meta, icon, options, ...extra }: IProps) => {
  const hasError = Boolean(meta && meta.touched && meta.error);
  const { placeholder } = extra;
  const { name } = input;
  const id = `form-input-${name}`;

  if (extra.type === 'editor') {
    const { onChange } = input;

    return (
      <FormGroup>
        <Label for={id}>{placeholder}</Label>
        <TextEditor onChange={onChange} invalid={hasError} value={input.value} />
        <Error message={meta.error} />
      </FormGroup>
    );
  }

  if (icon) {
    return (
      <FormGroup>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <Icon name={icon} size={17} />
            </InputGroupText>
          </InputGroupAddon>
          <ReactStrapInput {...input} {...extra} invalid={hasError}>
            {options &&
              Object.keys(options).map(key => (
                <option key={key} value={key}>
                  {options[key]}
                </option>
              ))}
          </ReactStrapInput>
          <Error message={meta.error} />
        </InputGroup>
      </FormGroup>
    );
  }

  if (extra.type === 'file') {
    const { onChange, onBlur, value, ...rest } = input;

    return (
      <FormGroup>
        <Label for={id}>{placeholder}</Label>
        <ReactStrapInput
          onChange={adaptFileEventToValue(onChange)}
          onBlur={adaptFileEventToValue(onBlur)}
          {...rest}
          {...extra}
          invalid={hasError}
          id={id}
        >
          {options &&
            Object.keys(options).map(key => (
              <option key={key} value={key}>
                {options[key]}
              </option>
            ))}
        </ReactStrapInput>
        <Error message={meta.error} />
      </FormGroup>
    );
  }

  if (extra.type === 'hidden') {
    return [
      <ReactStrapInput key="input" {...input} {...extra} invalid={hasError} id={id}>
        {options &&
          Object.keys(options).map(key => (
            <option key={key} value={key}>
              {options[key]}
            </option>
          ))}
      </ReactStrapInput>,
      <Error key="error" message={meta.error} />,
    ];
  }

  return (
    <FormGroup>
      <Label for={id}>{placeholder}</Label>
      <ReactStrapInput {...input} {...extra} invalid={hasError} id={id}>
        {options &&
          Object.keys(options).map(key => (
            <option key={key} value={key}>
              {options[key]}
            </option>
          ))}
      </ReactStrapInput>
      <Error message={meta.error} />
    </FormGroup>
  );
};
