const mongoose = require("mongoose");

const dutchSchema = new mongoose.Schema({
    word: String
});

module.exports.dutchSchema = dutchSchema;