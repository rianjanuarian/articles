
const articleRoutes = require("express").Router();
const ArticleControllers = require("../controllers/ArticleControllers")
articleRoutes.get("/",ArticleControllers.getArticle)
articleRoutes.post("/create", ArticleControllers.create)
articleRoutes.delete("/delete/:id", ArticleControllers.delete)
articleRoutes.get("/:id",ArticleControllers.getOneArticle)


module.exports = articleRoutes;