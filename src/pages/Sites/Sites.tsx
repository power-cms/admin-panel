import { ISite } from '@power-cms/react-kit';
import React, { ReactElement } from 'react';
import { FileText, Tv } from 'react-feather';
import { IElementData, ListPage } from '../../common/Page/ListPage';

export class Sites extends ListPage<ISite> {
  public title = 'Sites';

  public renderElement = (site: ISite): IElementData => ({
    ...site,
    subtitle: site.url,
    avatar: this.getAvatar(site),
  });

  public getAvatar = (site: any): ReactElement => {
    switch (site.type) {
      case 'blog':
        return <Tv size={28} />;
      case 'text':
        return <FileText size={28} />;
      default:
        return <FileText size={28} />;
    }
  };
}
