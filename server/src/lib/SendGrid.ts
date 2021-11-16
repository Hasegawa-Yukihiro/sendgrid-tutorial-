import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");
sgMail.setSubstitutionWrappers("$", "");
const fromEmail = process.env.EMAIL || "";

interface SendgridUser {
  name: string;
  email: string;
  message: string;
}

class SendGrid {
  async contactEmail(user: SendgridUser) {
    const result = await sgMail.send({
      personalizations: [
        {
          to: user.email,
          subject: `${user.name}様 お問い合わせありがとうございます。`,
          substitutions: {
            MESSAGE: `<p>以下の問い合わせを受け付けました。<br>${user.message}</p>`
          }
        },
        {
          to: fromEmail,
          subject: "問い合わせがありました。",
          substitutions: {
            MESSAGE: `<p>${user.name}様<br>${user.message}</p>`
          }
        }
      ],
      from: {
        email: "y.h.baskeeee@icloud.com",
        name: "長谷川 有希紘"
      },
      html: "$MESSAGE"
    });
    console.log("success", result);

    return true;
  }
}

const sendGrid = new SendGrid();

namespace SendGridOption {
  export type User = SendgridUser;
}

export { sendGrid, SendGridOption };
