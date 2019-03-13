import { authContainer, settingsContainer, siteContainer, userContainer } from '@power-cms/react-kit';
import { Redirect } from 'react-router';
import { INavConfig, IRouteConfig } from './common/Router/router.types';
import { ForgotPassword } from './pages/Login/ForgotPassword';
import { Login } from './pages/Login/Login';
import { Logout } from './pages/Logout/Logout';
import { SettingsUpdate } from './pages/Settings/SettingsUpdate';
import { SiteCreate } from './pages/Sites/SiteCreate';
import { Sites } from './pages/Sites/Sites';
import { SiteUpdate } from './pages/Sites/SiteUpdate';
import { Users } from './pages/Users/Users';
import { UserUpdate } from './pages/Users/UserUpdate';

export const authRoutes: IRouteConfig[] = [
  { path: '/auth/login', exact: true, component: authContainer.login(Login), props: { successLink: '/' } },
  { path: '/auth/forgot_password', exact: true, component: ForgotPassword },
];

export const panelRoutes: IRouteConfig[] = [
  { path: '/', exact: true, component: Redirect, props: { to: '/sites' } },
  {
    path: '/sites',
    exact: true,
    component: siteContainer.getAll(Sites),
    props: { createLink: '/sites/create', detailsLink: '/sites/:id' },
  },
  {
    path: '/sites/create',
    exact: true,
    component: siteContainer.create(SiteCreate),
    props: { backLink: '/sites', successLink: '/sites' },
  },
  {
    path: '/sites/:id',
    exact: true,
    component: siteContainer.update(SiteUpdate),
    props: { backLink: '/sites', successLink: '/sites' },
  },
  {
    path: '/users',
    exact: true,
    component: userContainer.getAll(Users),
    props: { detailsLink: '/users/:id' },
  },
  {
    path: '/users/:id',
    exact: true,
    component: userContainer.update(UserUpdate),
    props: { backLink: '/users', successLink: '/users' },
  },
  {
    path: '/settings',
    exact: true,
    component: settingsContainer.update(SettingsUpdate),
    props: { successLink: '/' },
  },
  {
    path: '/logout',
    exact: true,
    component: authContainer.logout(Logout),
    props: { redirectLink: '/auth/login' },
  },
];

export const navigation: INavConfig[] = [
  { path: '/sites', title: 'Sites', icon: 'Package' },
  { path: '/users', title: 'Users', icon: 'User' },
  { path: '/settings', title: 'Settings', icon: 'User' },
  { path: '/logout', title: 'Logout', icon: 'LogOut' },
];
