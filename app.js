const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 3200
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/demo', {useNewUrlParser: true})
    .then((connection) => {
        console.log("connected to DB --->")

        app.get('/',(req,res) => {//homepage
            res.send('Hello World!')
        })

})
.catch((error) => {
    console.log(error)
})
app.listen(port, () => {
    console.log('Example app listening at http://localhost:3200 ')
}
)