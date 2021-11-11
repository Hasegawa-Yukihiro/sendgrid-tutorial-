import { ContactEmail } from "./Value/Email";

export class Contact {
  readonly email: ContactEmail;

  constructor(data: { email: string }) {
    this.email = new ContactEmail(data.email);
  }
}
