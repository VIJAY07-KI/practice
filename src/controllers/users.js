const createUsers = (request,response) => {
      console.log(request.body)
      response.send("we recieved your Request!!!")
    }

const getUsers = (request,response) => {
        console.log(request.body)
        response.send("These are amazon products !!")
}

module.exports = {
    createUsers,
    getUsers
}

