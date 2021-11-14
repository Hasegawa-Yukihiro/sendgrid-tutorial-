import sgMail from "@sendgrid/mail";
import { Contact } from "src/domain/Models/Contact";
import { ContactRepositoryProps } from "./type";

export class ContactRepository implements ContactRepositoryProps.Impl {
  async create(contact: Contact): Promise<boolean> {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

    /** 送信者へ送るメール */
    const senderMsg = {
      to: contact.email.value,
      from: "y.h.baskeeee@icloud.com",
      subject: "お問い合わせありがとうございます。",
      text: "以下の問い合わせを受け付けました。",
      html: `<p>以下の問い合わせを受け付けました。<br>${contact.message.value}</p>`
    };

    sgMail
      .send(senderMsg)
      .then(val => {
        console.log("success", val);
      })
      .catch(err => {
        console.log("failed", err);
      });

    /** 受信者（管理者）へ送るメール */
    const receiverMsg = {
      to: "y.h.baskeeee@icloud.com",
      from: "y.h.baskeeee@icloud.com",
      subject: "以下の問い合わせがありました。",
      text: "以下の問い合わせがありました。",
      html: `<p>${contact.message.value}</p>`
    };

    sgMail
      .send(receiverMsg)
      .then(val => {
        console.log("success", val);
      })
      .catch(err => {
        console.log("failed", err);
      });

    return true;
  }
}
