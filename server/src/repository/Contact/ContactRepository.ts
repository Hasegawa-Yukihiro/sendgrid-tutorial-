import sgMail from "@sendgrid/mail";
import { Contact } from "src/domain/Models/Contact";

namespace ContactRepositoryProps {
  export interface Impl {
    create: (contact: Contact) => Promise<boolean>;
  }
}

export class ContactRepository implements ContactRepositoryProps.Impl {
  async create(contact: Contact): Promise<boolean> {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

    const msg = {
      to: "y.h.baskeeee@icloud.com",
      from: contact.email.value,
      subject: "Sending with SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>"
    };

    sgMail
      .send(msg)
      .then(val => {
        console.log("success", val);
      })
      .catch(err => {
        console.log("failed", err);
      });

    return true;
  }
}
