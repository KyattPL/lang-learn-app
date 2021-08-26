const mongoose = require('mongoose');

const dutchSchema = require('./langSchemas/dutchSchema.js');
const mandarinSchema = require('./langSchemas/mandarinSchema.js');
const norwegianSchema = require('./langSchemas/norwegianSchema.js');

const DutchCard = mongoose.model("DutchCard", dutchSchema.dutchSchema, "DutchCards");
const MandarinCard = mongoose.model("MandarinCard", mandarinSchema.mandarinSchema, "MandarinCards");
const NorwegianCard = mongoose.model("NorwegianCard", norwegianSchema.norwegianSchema, "NorwegianCards");

const getLanguageCard = (lang) => {

    let returnCardModel = null;

    switch (lang) {
        case "Dutch": returnCardModel = DutchCard; break;
        case "Mandarin": returnCardModel = MandarinCard; break;
        case "Norwegian": returnCardModel = NorwegianCard; break;
        default: returnCardModel = null;
    }

    return returnCardModel;
}

module.exports.getLanguageCard = getLanguageCard;