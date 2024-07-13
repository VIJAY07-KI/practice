const router =  require('express').Router()
const { createUsers, getUsers } = require("../controllers/users")
router.post("/users",createUsers)
      .put("/users/:id")
      .delete("/users/:id")
      .get("/users", getUsers)

module.exports = router