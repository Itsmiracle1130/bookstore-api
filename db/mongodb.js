const mongoose = require("mongoose")
const CONFIG = require("../config/config")

function connectMongoDb() {
    mongoose.connect(CONFIG.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

    mongoose.connection.on('connected', () => {
        console.log("MongoDB database connected successfully")
    })

    mongoose.connection.on('error', (err) => {
        console.log("an error occured")
        console.log(err)
    })
}

module.exports = {connectMongoDb}