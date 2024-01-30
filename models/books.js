const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookModel = new Schema ({
    title: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: false
    },
    longDescription: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        max: [2024, 'Year must be less than or equal to 2024'] //validation with custom message
    },
    isbn: {
        type: String,
        required: false,
        unique: [true, 'ISBN must be unique'] //validation with custom message
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be greater than or equal to 0'] //validation with custom message
    },
    uploadedAt : {
        type: Date,
        default: Date.now
    },
    lastUpdateAt : {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("books", bookModel)