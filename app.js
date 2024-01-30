const express = require("express")
const bodyParser = require("body-parser")
const CONFIG = require("./config/config")
const bookRouter = require('./Routes/books')
const {connectMongoDb} = require('./db/mongodb') 



const app = express()
connectMongoDb()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1/books', bookRouter)


app.get("/", (req, res) => {
    res.send("Welcome to The Bookstore Home Page")
})

//error handler MW
app.use((err, req, res, next) => {
    console.log(err)
    const errorStatus = err.status || 500
    res.status(errorStatus).send(err.message)

    next()
})

app.listen(CONFIG.PORT, () => {
    console.log(`Server is running on http://localhost:${CONFIG.PORT}`)
})