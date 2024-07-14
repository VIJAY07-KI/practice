const User  = require('../models/users')

const createUsers = (request,response) => { // signup
      console.log(request.body)
      response.send("we recieved your Request!!!")
    }

const getUsers = (request, response) => {
    User.find()
    .then((userDetails) => {
        return response.send(userDetails)
    })
    .catch((error) => {
        return response.send(error)
    }) 
}

const updateUsers = (request, response) => {
    User.findById(request.params.id)
    .then((userDetails) => {
        console.log("userDetailsuserDetailsuserDetails")
        if(!userDetails) {
            return response.send("User Details not present, please check email")
        }
        userDetails.set({name: request.body.name})
        userDetails.save()
        .then((savedUserDetails) => {
            return response.send(savedUserDetails)
        })
        .catch((error) => {
            return response.send(error)
        }) 
    })
    .catch((error) => {
        return response.send(error)
    }) 
}

const deleteUsers = (request, response) => {
    User.findById(request.params.id)
    .then((user) => {
        console.log("userDetailsuserDetailsuserDetails")
        console.log(user)
        if(!user) {
            return response.send("User Details not present, please check email")
        }
        console.log(user)
        
        user.remove()
        .then(userDetails => {
            console.log("dfvfdv df")
            return response.send("succ")
        })
        .catch((error) => {
            return response.send(error)
        }) 
    })
    .catch((error) => {
        return response.send(error)
    }) 
}

module.exports = {
    createUsers,
    getUsers,
    updateUsers,
    deleteUsers
}

