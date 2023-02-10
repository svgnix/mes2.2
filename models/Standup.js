const mongoose = require('mongoose');

const StandupSchema = new mongoose.Schema({
    userid: {
        type: Number
    },
    name: {
        type: String, 
        required: true
    },
    college: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    regNum: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date
    },
    mailSent: {
        type: Boolean,
        default: false
    },
});


module.exports = Standup = mongoose.model('Standup', StandupSchema);