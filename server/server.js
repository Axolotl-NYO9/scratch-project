const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

const emotionsControllers = require("./controllers/emotionsController");
// console.log(emotionsControllers);

//morgan installation connection
const morgan = require("morgan");
//configure morgan to log requests
app.use(morgan("dev"));

//connecting to database/ importing mongoose
const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/ChallengeBoosterDatabase";
mongoose.connect(mongoURI);

mongoose.connection.once("open", () => {
  console.log("Connected to Database");
});

//parsing incoming json requests
app.use(express.json());

app.use("/build", express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, "../client/index.html"));
  // res.sendFile(path.join(__dirname, /* add indext html file her*/ ));
});

app.get("/boredButton", emotionsControllers.boredButton, (req, res) => {
  console.log("bored button click");
  res.status(200).json(res.locals.bored);
});

// console.log(emotionsControllers)

// app.post;

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

// DO WE NEED THIS ??
module.exports = app;
