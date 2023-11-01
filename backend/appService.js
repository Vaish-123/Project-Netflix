const bcrypt = require("bcrypt");
const User = require("./Schema/userSchema");
const { ResponseMessages, EmailInstance } = require("./Assets.js");
const nodemailer = require("nodemailer");

const EMAIL = "admin@gmail.com";
const PASSWORD = "123qwe";

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587, // Port for secure SMTP
  secure: false, // true for 465, false for other ports
  auth: {
    user: EmailInstance.senderAddress,
    pass: EmailInstance.senderPassword,
  },
});

const ComposeEmailHtml = (type) => {
  var mainContent = 'Default body content';
  if (type == "signup") mainContent = EmailInstance.BodyText;
  else if (type == "forgotpassword") mainContent = "<p>To reset your password, click the button below.</p>"
  const emailBody =
    `<html>
    <head>
      <style>
        ${EmailInstance.styles}
      </style>
    </head>
    <body>
      ${EmailInstance.Header}
      ${mainContent}
      ${EmailInstance.Footer}
    </body>
  </html>`;
  return emailBody;
}

const SendMail = (recipientAddress, type) => {
  const body = ComposeEmailHtml(type);
  const mailOptions = {
    from: EmailInstance.senderAddress,
    to: recipientAddress,
    subject: EmailInstance.Subject,
    //text: "BhuHaHaHa", //either text or html will work at a time.
    html: body,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error occurred while sending email: ", error);
      // If sending the email fails, you might want to handle this and potentially inform the user.
      // For instance, you could send a response back to the user indicating the failure.
      // res.status(500).send({ message: EmailInstance.FailedMessage });
      return false;
    }
    else return true;
    // else {
    //   console.log("Email sent: " + info.response);
    //   // You might also want to respond with a success message to the user if the email sends successfully.
    //   res.status(200).send({ message: "Email sent successfully!" });
    // }
  });
}

//what is this?
function UserAuth(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  if (email == EMAIL && password == PASSWORD) {
    session = req.session;
    session.userid = req.body.username;
    res.send(true);
  } else res.send("Invalid username or password");
}

function logout(req, res) {
  req.session.destroy();
  res.send({ message: ResponseMessages.logoutSuccess });
}

function signup(req, res) {
  const name = req.body.email;
  const password = req.body.password;
  var emailStatus = true;
  User.find({ name: name }).then((result) => {
    if (result && result.length != 0)
      res.status(409).send({ message: ResponseMessages.userAlreadyExists });
    else {
      bcrypt.hash(password, 10, (err, hash) => {
        const userObj = new User({ name: name, password: hash });
        userObj.save().then(val => {
          if (val) emailStatus = SendMail(name, "signup");
        });
      });
      if (emailStatus) res.send({ message: ResponseMessages.registrationSuccess });
      else res.send({ message: ResponseMessages.MultipleErrorsOccured });
    }
  });
}

function login(req, res) {
  User.find({ name: req.body.email }).then((result) => {
    if (result && result.length == 1) {
      User.findOne({ name: req.body.email }).then((userResult) => {
        bcrypt.compare(
          req.body.password,
          userResult.password,
          function (err, match) {
            if (match) {
              req.session.loggedIn = true;
              req.session.name = userResult.name;
              res.send({ message: ResponseMessages.loginSuccess });
            } else {
              res.status(401).send({
                heading: ResponseMessages.badRequest,
                message: ResponseMessages.passwordIncorrect,
              });
            }
          }
        );
      });
    } else if (result.length > 1)
      res.status(400).send({
        heading: ResponseMessages.badRequest,
        message: ResponseMessages.multipleUsersFound,
      });
    else
      res.status(404).send({
        heading: ResponseMessages.badRequest,
        message: ResponseMessages.userNotFound,
      });
  });
}

function forgotPassword(userEmail) {
  SendMail(userEmail, "forgotpassword");
}

const TriggerMail = (emailAddress) => {
  SendMail(emailAddress, "signup");
}

//TriggerMail(); //trigger mail for testing

module.exports = { UserAuth, logout, signup, login, TriggerMail };
