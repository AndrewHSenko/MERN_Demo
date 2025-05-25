const express = require('express')
const app = express()

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return {id, name}
    })
    res.send('<a href="/api/products">Products!</a>')
})



app.get('/api/products/:productID', (req, res) => {
    console.log(req.params)
    const singleProduct = products.find((product) => product.id === 1)
    res.json(singleProduct)
})

app.listen(4000, () =>{
    console.log('server running')
})
