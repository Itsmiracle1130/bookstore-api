const mongoose = require("mongoose")
const Schema = mongoose.Schema

const authorModel = new Schema ({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    country: {
        type: String,
        required: false
    },
    about: {
        type: String,
        required: false
    },    
    books : {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model("authors", authorModel)