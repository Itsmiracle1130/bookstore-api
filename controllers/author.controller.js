const authorModel = require("../models/authors")

const getAllAuthors = (req, res) => {
    authorModel.find()
        .then(authors => {
            res.send(authors)
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
}

const getAuthor = (req, res) => {
    let id = req.params.id
    authorModel.findById(id)
        .then(author => {
            res.status(200).send(author)
        }).catch(err => {
            console.log(err)
            res.status(404).send(err)
        })
}

const addAuthor = (req, res) => {
    const author = req.body
    author.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    authorModel.create(author)
        .then(author => {
            res.status(201).send({
                message: "Author posted successfully",
                data: author
            })
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

const updateAuthor = (req, res) => {
    const id = req.params.id
    const author = req.body
    author.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    authorModel.findByIdAndUpdate(id, author, { new: true })
        .then(newAuthor => {
            res.status(200).send({
                message: "Author Updated successfully",
                data: newAuthor
            })
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

const deleteAuthor = (req, res) => {
    const id = req.params.id
    authorModel.findByIdAndRemove(id)
        .then(author => {
            res.status(200).send({
                message: "Author Deleted successfully",
                data: author
            })
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

module.exports = {
    getAllAuthors,
    getAuthor,
    addAuthor,
    updateAuthor,
    deleteAuthor
}