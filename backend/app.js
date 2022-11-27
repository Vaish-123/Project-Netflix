const express = require("express");
const CORS = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const sessions = require("express-session");
const bcrypt = require("bcrypt");
const User = require("./Schema/userSchema");
const dbURL = "mongodb://localhost:27017/netflix";

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }).then((res) =>
    app.listen(PORT, () => {
        console.log("Started at ==>", PORT);
    })
)
    .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(CORS());

const EMAIL = 'admin@gmail.com';
const PASSWORD = '123qwe';

//Session
const age = 5000;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: {
        maxAge: age
    },
    resave: false
}));

//User authentication
app.post('/', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    if (EMAIL == email && PASSWORD == password) {
        session = req.session;
        session.userid = req.body.username;
        res.send(true);
    }
    else {
        res.send('Invalid username or password');
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send();
});


app.post('/signup', (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    bcrypt.hash(password, 10, (err, hash) => {
        const userObj = new User({ name: name, password: hash });
        userObj.save();
    });
})

app.post('/login', (req, res) => {
    var match = false;
    const name = req.body.name;
    const password = req.body.password;
    User.findOne({ name: name }).then(result => {
        if (result) {
            bcrypt.compare(password, result.password, function (err, match) {
                req.session.loggedIn = true;
                req.session.name = result.name;
                res.json(match);
            })
        }
        else {
            res.json(match)
        }
    })

})