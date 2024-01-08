const mongoose = require("mongoose")

const signupSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    password: {type: String, type: Number, required: true}
})

// const happySchema = new mongoose.Schema({

// })

// const sadSchema = new mongoose.Schema({

// })

// const angrySchema = new mongoose.schema({

// })


module.exports = mongoose.model('signup', signupSchema)