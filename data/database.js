const mongoose = require("mongoose");
const signupSchema = require("./schemas");
const Emotions = require("./schemas");

const mongoURI = "mongodb://127.0.0.1:27017/ChallengeBoosterDatabase";
mongoose.connect(mongoURI);

mongoose.connection.once("open", () => {
  console.log("Connected inside data folder");
});

console.log(Emotions);

const Bored = new Emotions({
  emotion: "Bored",
  challenge1:
    "You're feeling bored? No problem. We're going to give you a great challenge (this is challenge 1) ",
  challenge2: "(this is challenge 2)",
  challenge3: "(this is challenge 3)",
});

Bored.save().then(console.log("successful save"));
