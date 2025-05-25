const express = require('express')
const app = express()
const morgan = require('morgan');
const logger = require('./logger')
const authorize = require('./authorize')

app.use([logger, authorize])
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.listen(4000, () => {
    console.log('Server is listening...')
})

//6:23:56