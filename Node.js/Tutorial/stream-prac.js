const { createReadStream } = require('fs');

// highWaterMark controls size of buffer returned
const stream = createReadStream('./content/big.txt', {highWaterMark:90000, encoding: 'utf8'})

stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => {
    console.log(err)
})
// To generate a big file
// const { writeFileSync } = require('fs')
// for (let i = 0; i < 10000; i++) {
//     writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a'})
// }