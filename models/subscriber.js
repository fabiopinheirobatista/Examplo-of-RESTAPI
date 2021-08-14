const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    userchannel: {
        type: String,
        required: true
    },
    userdate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)