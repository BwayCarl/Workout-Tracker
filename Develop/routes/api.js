const Workout = require("../models");
var db = require("../models");
const path = require ("path");

module.exports = function(app) {

    // GET index HTML page
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + "./public/index.html"));
    });

    // GET stats HTML page
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname + "./public/stats.html"));
    });

    //GET exercise HTML page
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname + "./public/exercise.html"));
    });



}