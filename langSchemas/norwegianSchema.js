const mongoose = require('mongoose');

const nounSchema = new mongoose.Schema({
    countable: String,
    gender: String,
    singularIndefinite: String,
    singularDefinite: String,
    pluralIndefinite: String,
    pluralDefinite: String
});

const adjSchema = new mongoose.Schema({
    masculineSinIndef: String,
    masculineSinDef: String,
    masculinePlIndef: String,
    masculinePlDef: String,
    feminineSinIndef: String,
    feminineSinDef: String,
    femininePlIndef: String,
    femininePlDef: String,
    neuterSinIndef: String,
    neuterSinDef: String,
    neuterPlIndef: String,
    neuterPlDef: String,
    comparative: String,
    indefSuperlative: String,
    defSuperlative: String
});

const verbSchema = new mongoose.Schema({
    infinitive: String,
    present: String,
    past: String,
    future: String,
    conditional: String,
    imperative: String,
    presentPerfect: String,
    pastPerfect: String,
    futurePerfect: String,
    conditionalPerfect: String
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

const norwegianSchema = new mongoose.Schema({
    word: String,
    translation: [translationSchema]
});

module.exports.nounSchema = nounSchema;
module.exports.adjSchema = adjSchema;
module.exports.verbSchema = verbSchema;
module.exports.translationSchema = translationSchema;
module.exports.norwegianSchema = norwegianSchema;