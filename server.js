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

// const User = mongoose.model("User", { name: String, email: String, password: String }, "Users");

app.use(express.static(path.join(__dirname, "/frontend/build")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/front/build/index.html'));
});

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});