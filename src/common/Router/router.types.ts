import { ElementType } from 'react';

export interface IRouteConfig {
  path: string;
  component: ElementType;
  props?: any;
  exact?: boolean;
}

export interface INavConfig {
  path: string;
  title: string;
  icon: string;
}
