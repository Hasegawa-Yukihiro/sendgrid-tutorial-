import express from "express";
import rootDir from "app-root-path";
// import sgMail from "@sendgrid/mail";

// sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

// const msg = {
//   to: "y.h.baskeeee@icloud.com",
//   from: "y.h.baskeeee@icloud.com",
//   subject: "Sending with SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>"
// };

// sgMail
//   .send(msg)
//   .then(val => {
//     console.log("success", val);
//   })
//   .catch(err => {
//     console.log("failed", err);
//   });
const app = express();

app.use(express.static(rootDir + "/client/dist"));

const port = process.env.PORT || 3000;
app.listen(port);
