const express = require("express")
const bodyParser = require("body-parser")
const CONFIG = require("./config/config")
const authorRouter = require('./Routes/authors.routes')
const bookRouter = require('./Routes/books.routes')
const rateLimit = require("express-rate-limit")
const helmet = require('helmet')
const {connectMongoDb} = require('./db/mongodb') 



const app = express()
connectMongoDb()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)

//security middleware
app.use(helmet())

app.use('/api/v1/authors', authorRouter)
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