const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "f.scheeren@outlook.com",
    subject: "This is my first creation.",
    text: `I hope this one is actually get to you, ${name}`,
  });
};

const sendDeleteEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "f.scheeren@outlook.com",
    subject: "We feel sorry to see you go",
    text: `${name}, we do you want to leave is? What can we improve to see you come back?`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendDeleteEmail,
};
