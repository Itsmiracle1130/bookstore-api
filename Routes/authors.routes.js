const {Router} = require('express')
const {getAllAuthors, 
    getAuthor, 
    addAuthor, 
    updateAuthor, 
    deleteAuthor} = require('../controllers/author.controller')
const {addAuthorValidationMW, updateAuthorValidationMW} = require('../Validators/author.validator')

const authorRouter = Router()

authorRouter.get('/', getAllAuthors) 

authorRouter.get('/:id', getAuthor)

authorRouter.post('/', addAuthorValidationMW, addAuthor)

authorRouter.put('/:id', updateAuthorValidationMW, updateAuthor)

authorRouter.delete('/:id', deleteAuthor)

module.exports = authorRouter
