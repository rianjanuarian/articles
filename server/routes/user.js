
const usersRoutes = require("express").Router();
const UserControllers = require("../controllers/UserControllers")
const {login} = require("../middlewares/auth")
usersRoutes.get("/",UserControllers.getUsers)
usersRoutes.post("/create", UserControllers.create)
usersRoutes.post('/login',login,UserControllers.login)
usersRoutes.get('/:id',UserControllers.findUser)

module.exports = usersRoutes;