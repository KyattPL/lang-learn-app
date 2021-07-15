const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

console.log(process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err) => {
    if (err) console.log(err);
    else console.log(`Connected to the database`);
});

// const norwegianSchema = require('./langSchemas/norwegianSchema.js');

// const NorwegianCard = mongoose.model("NorwegianCard", norwegianSchema.norwegianSchema, "NorwegianCards");
// const DutchCard = mongoose.model("DutchCard", dutchSchema.dutchSchema, "DutchCards");

const cardUtils = require('./cardUtils.js');

app.use(express.static(path.join(__dirname, "/frontend/build")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/addCard', (req, res) => {
    const { lang, word, pronounciation, translation } = req.body;
    const CardModel = cardUtils.getLanguageCard(lang);
    const newCard = new CardModel({ word, pronounciation, translation });
    newCard.save((err) => {
        if (err) return res.sendStatus(500);
        else return res.sendStatus(200);
    });
});

app.post('/getCard', (req, res) => {
    const { lang, word } = req.body;
    const CardModel = cardUtils.getLanguageCard(lang);
    if (CardModel) {
        if (word) {
            CardModel.findOne({ word: word }, (err, doc) => {
                if (err) {
                    console.log(err);
                    res.send("DB_ERR");
                } else {
                    res.status(200).send(doc);
                }
            })
        } else {
            console.log("no word");
            res.send("MISSING_WORD_PASSED");
        }
    } else {
        console.log("no lang");
        res.send("MISSING_LANG_PASSED");
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
});

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});