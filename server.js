// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

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
  userFindAndModify: false,
});

// Routes
app.use(require("./routes/apiRoutes.js"));
//app.use(require("./routes/htmlRoutes.js"));

// Listening on Port...
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
