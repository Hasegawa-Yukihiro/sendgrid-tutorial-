import { StringLiteralLike } from "typescript";
import { ContactEmail } from "./Value/ContactEmail";
import { ContactMessage } from "./Value/ContactMessage";
import { ContactName } from "./Value/ContactName";

export class Contact {
  readonly name: ContactName;
  readonly email: ContactEmail;
  readonly message: ContactMessage;
  readonly createdAt: Date;

  constructor(data: {
    name: string;
    email: string;
    message: string;
    createdAt: Date;
  }) {
    this.name = new ContactName(data.name);
    this.email = new ContactEmail(data.email);
    this.message = new ContactMessage(data.message);
    this.createdAt = data.createdAt;
  }
}
