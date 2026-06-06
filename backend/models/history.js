const mongoose = require('mongoose')

const historySchema = new mongoose.Schema({
    userId: String,
    type: String,
    subject: String,
    grade: String,
    topic: String,
    messages: Array,
    date: {
        type: Date,
        default: Date.now
    }
})

const History = mongoose.model("history", historySchema)

module.exports = History