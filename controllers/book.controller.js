const bookModel = require("../models/books")

const getAllBooks = (req, res) => {
    bookModel.find()
        .then(books => {
            res.send(books)
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
}

const getBook = (req, res) => {
    let id = req.params.id
    bookModel.findById(id)
        .then(book => {
            res.status(200).send(book)
        }).catch(err => {
            console.log(err)
            res.status(404).send(err)
        })
}

const addBook = (req, res) => {
    const book = req.body
    book.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    bookModel.create(book)
        .then(book => {
            res.status(201).send({
                message: "Book posted successfully",
                data: book
            })
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

const updateBook = (req, res) => {
    const id = req.params.id
    const book = req.body
    book.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    bookModel.findByIdAndUpdate(id, book, { new: true })
        .then(newBook => {
            res.status(200).send({
                message: "Book Updated successfully",
                data: newBook
            })
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

const deleteBook = (req, res) => {
    const id = req.params.id
    bookModel.findByIdAndRemove(id)
        .then(book => {
            res.status(200).send({
                message: "Book Deleted successfully",
                data: book
            })
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

module.exports = {
    getAllBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook
}