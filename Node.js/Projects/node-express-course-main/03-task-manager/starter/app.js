const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

app.use(express.json())

app.use('/api/v1/tasks', tasks)

const port = 4000

app.listen(port, console.log(`Server listening on port ${port}...`))

// 25:23