import { ContactEmail } from "./Value/ContactEmail";
import { ContactMessage } from "./Value/ContactMessage";

export class Contact {
  readonly email: ContactEmail;
  readonly message: ContactMessage;

  constructor(data: { email: string; message: string }) {
    this.email = new ContactEmail(data.email);
    this.message = new ContactMessage(data.message);
  }
}
