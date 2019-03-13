/// <reference types="react-scripts" />

declare module 'react-medium-editor' {
  import { Component } from 'react';

  interface IProps {
    value?: string;
    onChange?: (text?: string) => void;
  }

  export = class Editor extends Component<IProps & any> {};
}
