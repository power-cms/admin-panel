import { FormPage } from '../../common/Page/FormPage';

export class SettingsUpdate extends FormPage {
  public title = 'Settings';
  public form = [[{ name: 'title', placeholder: 'Title' }]];
}
