const { error } = require('console')
const User  = require('../models/users')
const crypto = require('crypto')

const signup = (request, response) => { // create - post request
    const {name,email, password } = request.body
    console.log(User)
    User.findOne({email})
    .then((result) => {
        if(result) {
            return response.status(409).send({
                error : "user with this email already present"
            })
        }
        const salt = crypto.randomBytes(16).toString('hex')
        const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')
        const user = new User({email, name, hash, salt})
        user.save()
        .then((savedUser) =>{
            const userDetails = JSON.parse(JSON.stringify(savedUser))
            delete userDetails.hash
            delete userDetails.salt
            return response.send(userDetails)
        })
        .catch((error) =>{ 
            return response.send(error)
        })
    })
    .catch((error) => {
        return response.send(error)
    }) 
}

const login = (request,response) => {
    const{ email, password } = request.body
    User.findOne({ email})
    .then((result) => {
        if(!result){
        return response.status(409).send({
            error: 'user with this email not present'
        })
    }
    console.log("salt====")
    console.log(result)
    dbSaltValue = result.salt
    dbHashValue = result.hash
    const  hash = crypto.pbkdf2Sync(password, dbSaltValue ,1000 ,64 ,'sha512').toString('hex')
    if(hash != dbHashValue) {
        return response.status(404).send({
        status : false,
        error : {
            name : "not found error",
            message : "please check your password"
        }

        })
    }
    return response.status(200).send ({
        status : true,
        data : {
            name : result.name,
            email : result.email
        }

    })

    })
    .catch((error) => {
        return response.send(error)
    })
 
} 

module.exports = {
    signup,
    login
}