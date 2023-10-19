
const usersRoutes = require("express").Router();
const UserControllers = require("../controllers/UserControllers")
usersRoutes.get("/",UserControllers.getUsers)
usersRoutes.post("/create", UserControllers.create)
usersRoutes.post('/login',UserControllers.login)

module.exports = usersRoutes;