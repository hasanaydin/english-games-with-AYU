const express = require("express");
const mongoose = require("mongoose");
const dbConfig = require("./config/db.config");

const app = express();


mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(
    () => {
        console.log('connected');
    },
    (error) => {
        console.log(error)
    }
)

app.use(express.json());


app.listen(1001, function () {
    console.log('ready!');
})