// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const app = express();

// Port
const PORT = process.env.PORT || 3500;

// Apps and Usage

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use(require("./routes/api.js"));
//app.use(require("./routes/view.js"));

// Listening on Port...
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
