const Emotions = require('../../data/database')

const emotionsControllers = {};

emotionsControllers.boredButton = (req, res, next) => {

    Emotions.findOne({emotions: 'Bored'}).then(data => console.log(data));
    console.log('hello')
}

Emotions.findOne({emotions: 'Bored'}).then(data => console.log(data));

module.exports = emotionsControllers;