const {Router} = require('express')
const {getAllBooks, 
    getBook, 
    addBook, 
    updateBook, 
    deleteBook} = require('../controllers/book.controller')
const {addBookValidationMW, updateBookValidationMW} = require('../Validators/book.validator')

const bookRouter = Router()

bookRouter.get('/', getAllBooks) 

bookRouter.get('/:id', getBook)

bookRouter.post('/', addBookValidationMW, addBook)

bookRouter.put('/:id', updateBookValidationMW, updateBook)

bookRouter.delete('/:id', deleteBook)

module.exports = bookRouter
