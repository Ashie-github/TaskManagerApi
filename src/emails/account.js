const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "task.app@o2.pl",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "task.app@o2.pl",
    subject: "Goodbye!",
    text: `Goodbye ${name}, Let us know what we could have done better!`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail,
};
