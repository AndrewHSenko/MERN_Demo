require('dotenv').config()
require('express-async-errors') // Handles async requests instead of hard-coding wrapper

const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const notFoundMW = require('./middleware/not-found')
const errorMW = require('./middleware/error-handler')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products route</a>')
})

app.use('/api/v1/products', productsRouter)

app.use(notFoundMW)
app.use(errorMW)

const port = process.env.PORT || 4000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {

    }
}

start()