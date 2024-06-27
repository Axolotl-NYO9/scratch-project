const mongoose = require("mongoose");
// const Emotions = require("../../data/database");
const { Signup, Emotions } = require("../../data/schemas");
console.log('this is emotions', Emotions)

const emotionsControllers = {};

// emotionsControllers.boredButton = (req, res, next) => {

//     Emotions.findOne({emotions: 'Bored'}).then(data => console.log(data));
//     console.log('hello')
// }

// Emotions.findOne({emotions: 'Bored'}).then(data => console.log(data));

// module.exports = emotionsControllers;