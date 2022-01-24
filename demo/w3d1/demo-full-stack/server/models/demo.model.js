const mongoose = require('mongoose')

const DemoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be at least 2 characters"]  
    },
    stack:{
        type: String,
        required: [true, "Stack is required"],
        minlength: [2, "Stack must be at least 2 characters"]  
    },
    difficulty: {
        type: Number,
        required: [true, "Difficulty is required"],
        min: [0, "Difficulty must be positive"] , 
        max: [10, "Difficulty must not be higher than 10"]
    },
    rewatched: Boolean
}, {timestamps:true})

const Demo = mongoose.model('Demo', DemoSchema)

module.exports = Demo