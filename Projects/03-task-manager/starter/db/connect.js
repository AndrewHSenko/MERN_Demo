const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(url,
        {useNewUrlParser:true, // Deprecation Warning params added only since using mongoose v5
        useCreateIndex:true,
        useFindAndModify: false,
        useUnifiedTopology:true
    })
    .then(() => console.log('CONNECTED'))
    .catch(
        (err)=>console.log(err)
    )
}

module.exports = connectDB