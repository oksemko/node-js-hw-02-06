const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {
  SENDGRID_API_KEY = "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",
} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendMail = async (data) => {
  const mail = { ...data, from: "osemko@gmail.com" };
  await sgMail.send(mail);

  return true;
};

module.exports = sendMail;
