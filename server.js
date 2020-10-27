// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const db = require("./models")
const Workout = require("./models/workout.js");

// Port
const PORT = process.env.PORT || 3500;

// Apps and Usage
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(logger("dev"));

// Mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Listening on Port...
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
