const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
const path = require('path');
const sessionstore = require('sessionstore');

const session = require('express-session');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (err) console.log(err);
    else console.log(`Connected to the database`);
});

const User = mongoose.model("User", { name: String, email: String, password: String }, "Users");

app.use(express.static(path.join(__dirname, "/front/build")));
app.use(session({ secret: process.env.SESSION_SECRET, store: sessionstore.createSessionStore(), saveUninitialized: false, resave: true, cookie: { maxAge: 3600000 } }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/emailInUse', (req, res) => {
    const { email } = req.body;
    User.find({ email: email }, (err, docs) => {
        if (err) return console.log(err);
        if (docs.length != 0) return res.send("User with that email already exists");
        else return res.sendStatus(200);
    });
});

app.post('/signup', (req, res) => {
    const { nick, email, pass } = req.body;

    const newUser = new User({ name: nick, email: email, password: pass });
    newUser.save((err) => {
        if (err) return res.sendStatus(500);
        else return res.sendStatus(200);
    });
});

app.post('/login', (req, res) => {
    if (!req.session.email) {
        const { email, pass } = req.body;
        if (email && pass) {
            User.findOne({ email: email, password: pass }, (err, doc) => {
                if (err) {
                    console.log(err);
                    res.send("USER_NOT_FOUND");
                } else {
                    req.session.email = email;
                    res.sendStatus(200);
                }
            });
        } else {
            res.send("MISSING_CREDENTIALS");
        }
    } else {
        res.send("ALREADY_LOGGED_IN");
    }
});

app.get('/isLoggedIn', (req, res) => {
    if (req.session.email) res.send(true);
    else res.send(false);
});

app.get('/logout', (req, res) => {
    if (req.session.email) {
        req.session.destroy((err) => {
            if (err) return console.log(err);
            else return res.sendStatus(200);
        });
    } else {
        return res.send("NOT_LOGGED_IN");
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/front/build/index.html'));
});

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});