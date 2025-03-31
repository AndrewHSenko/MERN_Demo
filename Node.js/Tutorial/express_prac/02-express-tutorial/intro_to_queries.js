const express = require('express')
const app = express()
const {products} = require('./data.js')


app.get('/', (req, res) => {
    res.send('<h1> Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product)=> {
        const {id, name, image} = product;
        return { id, name, image };
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    const {productID} = req.params;
    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    )
    if (!singleProduct) {
        return res.status(404).send('<h1>Product not found</h1>')
    }
    res.json(singleProduct)
})
app.get('/api/v1/query', (req, res) => {
    const {search, limit} = req.query
    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if (sortedProducts.length < 1) {
        // res.status(200).send("No products match")
        return res.status(200).json({success : true, data : []})
    }
    return res.status(200).json(sortedProducts)
})

// app.get('/api/products/1', (req, res) => {
//     const singleProduct = products.find((product) => product.id === 1)
//     res.json(singleProduct)
// })

app.listen(4000, () => {
    console.log('Server is listening...')
})