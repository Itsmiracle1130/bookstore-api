const joi = require("joi")

const addBookSchema = joi.object({
    title: joi.string()
            .min(5)
            .max(250)
            .trim()
            .required(),
    shortDescription: joi.string()
            .min(0)
            .max(500)
            .optional()
            .trim(),
    longDescription: joi.string()
            .min(0)
            .max(5000)
            .optional()
            .trim(),
    author: joi.string()
            .min(3)
            .max(150)
            .trim()
            .required(),
    year: joi.number()
            .integer()
            .required()
            .max(2024),
    isbn: joi.string()
            .min(13)
            .max(20),
    price: joi.number()
            .min(0)
            .required(),
    uploadedAt: joi.date()
            .default(Date.now),
    lastUpdateAt: joi.date()
            .default(Date.now) 
})

const updateBookSchema = joi.object({
    title: joi.string()
            .min(0)
            .max(250)
            .trim(),
    shortDescription: joi.string()
            .min(0)
            .max(500)
            .trim(),
    longDescription: joi.string()
            .min(0)
            .max(5000)
            .trim(),
    author: joi.string()
            .min(3)
            .max(150)
            .trim(),
    year: joi.number()
            .integer()
            .max(2024),
    isbn: joi.string()
            .min(13)
            .max(20),
    price: joi.number()
            .min(0),
    lastUpdateAt: joi.date()
            .default(Date.now) 
})

async function addBookValidationMW(req, res, next) {
    const bookPayLoad = req.body

    try {
        await addBookSchema.validateAsync(bookPayLoad)
        next()
    } catch (error) {
        next({
            message: error.details[0].message,
            status: 400
        })
    }

}

async function updateBookValidationMW(req, res, next) {
    const bookPayLoad = req.body

    try {
        await updateBookSchema.validateAsync(bookPayLoad)
        next()
    } catch (error) {
        next({
            message: error.details[0].message,
            status: 400
        })
    }

}

module.exports = {
    addBookValidationMW, 
    updateBookValidationMW
}