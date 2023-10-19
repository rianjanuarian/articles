
const articleRoutes = require("express").Router();
const ArticleControllers = require("../controllers/ArticleControllers")
articleRoutes.get("/",ArticleControllers.getArticle)
articleRoutes.post("/create", ArticleControllers.create)
articleRoutes.delete("/delete/:id", ArticleControllers.delete)
articleRoutes.get("/:id",ArticleControllers.getOneArticle)
articleRoutes.post("/:id/create",ArticleControllers.createByUser)


module.exports = articleRoutes;