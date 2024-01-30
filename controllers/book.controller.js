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

const getBook = (const id = req.params.id
    bookModel.findById(id)
        .then(book => {
            res.status(200).send(book)
        }).catch(err => {
            console.log(err)
            res.status(404).send(err)
        })) => {
    const id = req.params.id
    bookModel.findById(id)
        .then(book => {
            res.status(200).send(book)
        }).catch(err => {
            console.log(err)
            res.status(404).send(err)
        })
}