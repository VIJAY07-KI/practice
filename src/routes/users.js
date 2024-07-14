const router =  require('express').Router()
const { createUsers, getUsers, updateUsers, deleteUsers } = require("../controllers/users")
router.post("/users",createUsers)
      .put("/users/:id", updateUsers)
      .delete("/users/:id", deleteUsers)
      .get("/users", getUsers)

module.exports = router