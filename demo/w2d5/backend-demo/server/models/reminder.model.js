const mongoose = require('mongoose')

const ReminderSchema = new mongoose.Schema({
    content: {
        type: String,
        required : [true, "Content is required"],
        minlength : [2, "Content must be at least 2 characters"]
    },
    priority: {
        type: Number,
        min: [0, "Priority cannot be negative."]
    },
    stack: {
        type: String,
        required : [true, "Stack is required"],
        minlength : [2, "Stack must be at least 2 characters"]
    }
}, {timestamps: true})

const Reminder = mongoose.model('Reminder', ReminderSchema)

module.exports = Reminder