import { FormPage } from "../../common/Page/FormPage";

export class UserUpdate extends FormPage {
  public title = "Update user";
  public form = [
    [{ name: "username", placeholder: "Username" }],
    [{ name: "email", placeholder: "E-mail" }]
  ];
}
