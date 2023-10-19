const { article } = require("../models");

class ArticleControllers {
  static async getArticle(req, res) {
    try {
      const result = await article.findAll();
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }
  static async create(req, res) {
    try {
      const { title, content, posting } = req.body;
      let result = await article.create({
        title,
        content,
        posting,
      });
      res.json(result)
    } catch (error) {
      res.json(error);
    }
  }

  static async delete(req, res) {}

  static async getOneArticle(req, res) {
    try {
        const id = +req.params.id
        const result = await article.findByPk(id)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
  }
}

module.exports = ArticleControllers;
