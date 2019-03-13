import React, { Component } from 'react';
import Editor from 'react-medium-editor';

interface IProps {
  value?: string;
  onChange?: (value: string) => void;
  invalid?: boolean;
}

export class TextEditor extends Component<IProps> {
  public onChange = (text: any) => {
    if (this.props.onChange) {
      this.props.onChange(text);
    }
  };

  public render() {
    const { onChange } = this;
    const { value } = this.props;

    return (
      <div className={value ? 'hide-placeholder' : ''}>
        <Editor text={value} onChange={onChange} />
      </div>
    );
  }
}
