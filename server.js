const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
const path = require('path');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (err) console.log(err);
    else console.log(`Connected to the database`);
});

const norwegianSchema = require('./norwegianSchema.js');

const NorwegianCard = mongoose.model("NorwegianCard", norwegianSchema.norwegianSchema, "NorwegianCards");
// const User = mongoose.model("User", { name: String, email: String, password: String }, "Users");

app.use(express.static(path.join(__dirname, "/frontend/build")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/addNorwegianCard', (req, res) => {
    const { word, pronounciation, translation } = req.body;
    // console.log(req.body);
    const newCard = new NorwegianCard({ word, pronounciation, translation });
    newCard.save((err) => {
        if (err) return res.sendStatus(500);
        else return res.sendStatus(200);
    });
});

app.post('/getNorwegianCard', (req, res) => {
    console.log(req.body);
    const { word } = req.body;
    if (word) {
        NorwegianCard.findOne({ word: word }, (err, doc) => {
            if (err) {
                console.log(err);
                res.send("WORD_NOT_FOUND");
            } else {
                res.status(200).send(doc);
            }
        })
    } else {
        res.send("MISSING_WORD");
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
});

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});