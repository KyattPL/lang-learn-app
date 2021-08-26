const mongoose = require("mongoose");

const nounSchema = new mongoose.Schema({
    gender: String,
    article: String,
    plural: String,
    sinDiminutive: String,
    plDiminutive: String
});

const adjSchema = new mongoose.Schema({
    uninflected: String,
    inflected: String,
    partitive: String,
    uninfComparative: String,
    infComparative: String,
    uninfSuperlative: String,
    infSuperlative: String
});

const verbSchema = new mongoose.Schema({
    infinitive: String,
    presFirst: String,
    presJij: String,
    presU: String,
    presThird: String,
    presPlural: String,
    presImperative: String,
    presParticiple: String,
    pastFirst: String,
    pastJij: String,
    pastU: String,
    pastThird: String,
    pastPlural: String,
    pastParticiple: String
});

const translationSchema = new mongoose.Schema({
    type: String,
    pronounciation: String,
    meaning: String,
    grammarNoun: {
        type: nounSchema,
        default: undefined
    },
    grammarAdjective: {
        type: adjSchema,
        default: undefined
    },
    grammarVerb: {
        type: verbSchema,
        default: undefined
    }
});

const dutchSchema = new mongoose.Schema({
    word: String,
    translation: [translationSchema]
});

module.exports.nounSchema = nounSchema;
module.exports.adjSchema = adjSchema;
module.exports.verbSchema = verbSchema;
module.exports.translationSchema = translationSchema;
module.exports.dutchSchema = dutchSchema;