const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters"]
    },
    price: {
        type: Number,
        min: [0, "Price must be positive number"]
    }
}, {timestamps: true})

const Item = mongoose.model('Item', ItemSchema)

module.exports = Item