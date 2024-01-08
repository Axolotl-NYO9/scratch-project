const mongoose = require("mongoose");
const signupSchema = require("./schemas");
const Emotions = require("./schemas");

const mongoURI = "mongodb://127.0.0.1:27017/ChallengeBoosterDatabase";
mongoose.connect(mongoURI);

mongoose.connection.once("open", () => {
  console.log("Connected inside data folder");
});

// console.log(Emotions);

// Emotions.deleteMany({}).then(console.log('objects deleted'))

const Bored = new Emotions({
  emotion: "Bored",
  challenge1: "Make a sandwich w a ingredient you have never used before",
  challenge2: "Learn a new dance routine (try looking up just dance) ",
  challenge3: "Find a local paint-sip near you",
});

const Angry = new Emotions({
  emotion: "Angry",
  challenge1: "Time to head to a rage room! <link here>",
  challenge2:
    "Take some deep breaths, turn on <this playlist> and go for a walk",
  challenge3: "How about a trip to the gym?",
});

const Sad = new Emotions({
  emotion: "Sad",
  challenge1:
    "You're feeling bored? No problem. We're going to give you a great challenge (this is challenge 1) ",
  challenge2: "listen to your favorite song that always makes you feel better",
  challenge3: "Go outside  and find some space to stare at the sky",
});

const Happy = new Emotions({
  emotion: "Happy",
  challenge1:
    " Go and share your joy with others (maybe help someone with a problem)",
  challenge2:
    "Record the memory to remind yourself of this feeling (journal? video?)",
  challenge3: "Connect with an old loved one/friend you havent seen in a while",
});

Bored.save().then(console.log("successful save Bored"));
Angry.save().then(console.log("successful save Angry"));
Sad.save().then(console.log("successful save Sad"));
Happy.save().then(console.log("successful save Happy")); 



