const { ResponseMessages, SystemSettings } = require("./Assets.js");
const express = require("express");
const CORS = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || SystemSettings.portLocal;
const sessions = require("express-session");
const appService = require("./appService.js");
const dbURL = SystemSettings.dbUrlLocal;

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log("Started at ==>", PORT);
    })
  )
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(CORS());

//Session
const age = 5000;
app.use(
  sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: {
      maxAge: age,
    },
    resave: false,
  })
);

//User authentication
app.post("/", (req, res) => {
  // appService.UserAuth(req, res);
});

app.get("/logout", (req, res) => {
  appService.logout(req, res);
});

const NullCheck = (request) => {
  if (request.email.trim() && request.password.trim()) return true;
  else return false;
};

app.post("/signup", (req, res) => {
  if (NullCheck(req.body)) appService.signup(req, res);
  else res.status(400).send({ message: ResponseMessages.valueNull });
});

app.post("/login", (req, res) => {
  if (NullCheck(req.body)) {
    appService.login(req, res);
  } else res.status(400).send({ message: ResponseMessages.valueNull });
});

app.post("/triggermail", (req, res) => {
  // const emailAddress = req.body.email;
  // appService.TriggerMail(emailAddress);
});