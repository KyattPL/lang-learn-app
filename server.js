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

const cardUtils = require('./cardUtils.js');

app.use(express.static(path.join(__dirname, "/frontend/build")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/addCard', (req, res) => {
    const { lang, cardObj } = req.body;
    const CardModel = cardUtils.getLanguageCard(lang);
    if (CardModel) {
        if (cardObj) {
            const { word, translation } = cardObj;
            CardModel.findOne({ word: word }, (err, doc) => {
                if (err) {
                    console.log(err);
                    res.send("DB_ERR");
                } else if (doc === null) {
                    let card = new CardModel({ word, translation });
                    card.save((err) => {
                        if (err) return res.sendStatus(500);
                        else return res.sendStatus(200);
                    });
                } else {
                    doc.translation.push(translation[0]);
                    doc.save().then(() => {
                        return res.sendStatus(200);
                    }).catch((err) => {
                        console.error("Error: ", err);
                        return res.sendStatus(500);
                    });
                }
            });
        } else {
            console.log("no word");
            res.send("MISSING_WORD_PASSED");
        }
    } else {
        console.log("no lang");
        res.send("MISSING_LANG_PASSED");
    }
});

app.post('/deleteCard', (req, res) => {
    const { password, lang, id, translationId } = req.body;
    if (password === process.env.DELETE_CARD_PASS) {
        const CardModel = cardUtils.getLanguageCard(lang);
        if (CardModel) {
            CardModel.findOneAndUpdate({ _id: id, "translation._id": translationId }, {
                $pull: {
                    translation: {
                        _id: translationId
                    }
                }
            }, (err) => {
                if (err) {
                    console.error("Error: ", err);
                } else {
                    res.sendStatus(200);
                }
            });
        } else {
            res.send("MISSING_LANG_PASSED");
        }
    } else {
        res.sendStatus(403);
    }
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

app.post('/checkDeletePassword', (req, res) => {
    const { password } = req.body;
    if (password === process.env.DELETE_CARD_PASS) {
        res.sendStatus(200);
    } else {
        res.sendStatus(403);
    }
});

app.post('/checkAddPassword', (req, res) => {
    const { password } = req.body;
    if (password === process.env.ADD_CARD_PASS) {
        res.sendStatus(200);
    } else {
        res.sendStatus(403);
    }
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
});

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});