import { IUser } from '@power-cms/react-kit';
import React from 'react';
import { User } from 'react-feather';
import { IElementData, ListPage } from '../../common/Page/ListPage';

export class Users extends ListPage<IUser> {
  public title = 'Users';

  public renderElement = (user: IUser): IElementData => ({
    title: user.username,
    subtitle: user.email,
    avatar: <User size={28} />,
  });
}
