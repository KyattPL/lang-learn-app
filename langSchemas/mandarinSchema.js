const mongoose = require('mongoose');

const translationSchema = mongoose.Schema({
    type: String,
    pronounciation: String,
    meaning: String
});

const mandarinSchema = mongoose.Schema({
    word: String,
    translation: [translationSchema]
});

module.exports.translationSchema = translationSchema;
module.exports.mandarinSchema = mandarinSchema;