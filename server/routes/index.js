const articleRoutes = require("./article");
const usersRoutes = require("./user");

const route = require("express").Router();

route.get("/", (req, res) => {
  res.send({ message: "homepage" });
});

route.use("/users",usersRoutes)
route.use("/articles",articleRoutes)
// route.use("/",articleRoutes)

module.exports = route;
