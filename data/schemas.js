const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, type: Number, required: true },
});

const emotionSchema = new mongoose.Schema({
  emotion: { type: String, required: true },
  challenge1: { type: String, required: true },
  challenge2: { type: String, required: true },
  challenge3: { type: String, required: true },
});

module.exports = mongoose.model("signup", signupSchema);

const Emotions = mongoose.model("Emotions", emotionSchema);
module.exports = Emotions;
