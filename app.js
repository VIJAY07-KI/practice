const express = require('express')
const mongoose = require('mongoose');

const userRouter = require("../abcd/src/routes/users")
const authenticationRouter = require("../abcd/src/routes/authentication")   

const app = express()
const port = 3200
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/demo', {useNewUrlParser: true})
    .then((connection) => {
        console.log("connected to DB --->")

        app.get('/contact',(req,res) => {//homepage
            res.send('Hello World!')
        })
        app.use('/',userRouter)
        app.use('/',authenticationRouter)


})
.catch((error) => {
    console.log(`Error while connecting to DB: ${error}` )
    mongoose.disconnect()
})
app.listen(port, () => {
    console.log('Application listening to http://localhost:3200 ')
})