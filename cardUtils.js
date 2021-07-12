const mongoose = require('mongoose');

const norwegianSchema = require('./langSchemas/norwegianSchema.js');
const dutchSchema = require('./langSchemas/dutchSchema.js');

const NorwegianCard = mongoose.model("NorwegianCard", norwegianSchema.norwegianSchema, "NorwegianCards");
const DutchCard = mongoose.model("DutchCard", dutchSchema.dutchSchema, "DutchCards");

const getLanguageCard = (lang) => {

    let returnCardModel = null;

    switch (lang) {
        case "Norwegian": returnCardModel = NorwegianCard; break;
        case "Dutch": returnCardModel = DutchCard; break;
        default: returnCardModel = null;
    }

    return returnCardModel;
}

module.exports.getLanguageCard = getLanguageCard;