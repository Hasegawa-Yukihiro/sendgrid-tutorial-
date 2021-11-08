let sgMail = require("@sendgrid/mail");

sgMail.setApiKey(
  "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"
);
console.log("sgMail", sgMail);

const msg = {
  to: "y.h.baskeeee@icloud.com",
  from: "y.h.baskeeee@icloud.com",
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
