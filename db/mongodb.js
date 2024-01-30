const mongoose = require("mongoose")
const CONFIG = require("../config/config")
const logger = require('../logging/logger')


function connectMongoDb() {
    mongoose.connect(CONFIG.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

    mongoose.connection.on('connected', () => {
        logger.info("MongoDB database connected successfully")
    })

    mongoose.connection.on('error', (err) => {
        logger.error(err.message)
    })
}

module.exports = {connectMongoDb}