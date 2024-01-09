const mongoose = require("mongoose");
// const Emotions = require("../../data/database");
const { Signup, Emotions } = require("../../data/schemas");
console.log('this is emotions', Emotions)

const emotionsControllers = {};

emotionsControllers.boredButton = (req, res, next) => {
  Emotions.findOne({ emotion: "Bored" })
  .then((data) => {
      res.locals.bored = data;
      console.log(data);
      return next();
    });

  }
;

module.exports = emotionsControllers;
