const { article, user } = require("../models");

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
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await article.destroy({
        where: { id },
      });
      res.json({ message: "delete success" });
    } catch (error) {
      res.json(error);
    }
  }

  static async getOneArticle(req, res) {
    try {
      const id = +req.params.id;
      const result = await article.findByPk(id);
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }
  static async createByUser(req, res) {
    try {
      const id = +req.params.id;
      const { title, content, posting, userId } = req.body;
      const result = await user.findByPk(id);
      const createArticles = await article.create({
        title,
        content,
        posting,
        userId: result.id,
      });
      res.json(createArticles);
    } catch (error) {
      res.json(error);
    }
  }
  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { posting } = req.body;
      let result = await article.update(
        {
          posting,
        },
        { where: { id } }
      );
      res.json(result)
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = ArticleControllers;
