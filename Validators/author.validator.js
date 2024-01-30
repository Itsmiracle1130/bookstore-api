const joi = require("joi")

const addAuthorSchema = joi.object({
    firstname: joi.string()
            .max(255)
            .trim()
            .required(),
    lastname: joi.string()
            .max(255)
            .required()
            .trim(),
    dob: joi.date()
            .greater('1-1-1900')
            .less('1-1-2024')
            .required(),
    country: joi.string()
            .optional()
            .trim(),
    about: joi.string()
            .max(5000)
            .trim(),
    books: joi.array()
            .items(joi.string())
            .optional(),
    createdAt: joi.date()
            .default(Date.now),
    lastUpdateAt: joi.date()
            .default(Date.now) 
            
})

const updateAuthorSchema = joi.object({
    firstname: joi.string()
            .max(255)
            .trim(),
    lastname: joi.string()
            .max(255)
            .trim(),
    dob: joi.date()
            .greater('1-1-1900')
            .less('1-1-2024'),
    country: joi.string(),
    about: joi.string()
            .max(5000)
            .trim(),
    books: joi.array()
            .items(joi.string())
            
})

async function addAuthorValidationMW(req, res, next) {
    const authorPayLoad = req.body

    try {
        await addAuthorSchema.validateAsync(authorPayLoad)
        next()
    } catch (error) {
        next({
            message: error.details[0].message,
            status: 400
        })
    }

}

async function updateAuthorValidationMW(req, res, next) {
    const authorPayLoad = req.body

    try {
        await updateAuthorSchema.validateAsync(authorPayLoad)
        next()
    } catch (error) {
        next({
            message: error.details[0].message,
            status: 400
        })
    }

}

module.exports = {
        addAuthorValidationMW, 
        updateAuthorValidationMW
}