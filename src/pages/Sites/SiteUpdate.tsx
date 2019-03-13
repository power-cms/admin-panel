import { SiteType } from '@power-cms/react-kit';
import { enumToOptions } from '../../common/Forms/enum-to-options';
import { FormPage } from '../../common/Page/FormPage';

export class SiteUpdate extends FormPage {
  public title = 'Update site';
  public form = [
    [{ name: 'title', placeholder: 'Title' }],
    [
      {
        name: 'type',
        placeholder: 'Type',
        type: 'select',
        options: enumToOptions(SiteType),
      },
      { name: 'url', placeholder: 'Url' },
    ],
    [{ name: 'content', placeholder: 'Content', type: 'editor' }],
  ];
}
