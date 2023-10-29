const bcrypt = require("bcrypt");
const User = require("./Schema/userSchema");
const ResponseMessages = require("./Assets.js");

const EMAIL = "admin@gmail.com";
const PASSWORD = "123qwe";

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
  const name = req.body.name;
  const password = req.body.password;
  bcrypt.hash(password, 10, (err, hash) => {
    const userObj = new User({ name: name, password: hash });
    userObj.save();
  });
  res.send({ message: ResponseMessages.registrationSuccess });
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

module.exports = { UserAuth, logout, signup, login };
