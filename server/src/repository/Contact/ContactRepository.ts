import { Contact } from "src/domain/Models/Contact";
import { sendGrid, SendGridOption } from "~src/lib/SendGrid";
import { ContactRepositoryProps } from "./type";

export class ContactRepository implements ContactRepositoryProps.Impl {
  async create(contact: Contact): Promise<boolean> {
    const user: SendGridOption.User = {
      name: contact.name.value,
      email: contact.email.value,
      message: contact.message.value
    };

    try {
      await sendGrid.contactEmail(user);
    } catch (e) {
      console.log("failed", e);
    }

    return true;
  }
}
