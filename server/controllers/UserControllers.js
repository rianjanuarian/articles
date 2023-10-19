const { decryptPwd } = require("../helpers/bcrypt");
const { tokenGenerator } = require("../helpers/jsonwebtoken");
const { user, article } = require("../models");
class UserControllers {
  static async getUsers(req, res) {
    try {
      const result = await user.findAll({
        include: [article],
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async create(req, res) {
    try {
      const { username, password, email, image } = req.body;
      let result = await user.create({
        username,
        password,
        email,
        image,
      });
      res.json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;
      let emailFound = await user.findOne({
        where: {
          username,
        },
      });
      if (emailFound) {
        if (decryptPwd(password, emailFound.password)) {
          let access_token = tokenGenerator(emailFound);
          let username = emailFound.username;
          let image = emailFound.image;
          let id = emailFound.id;
          res.json({ access_token, username, image, id });
        } else {
          res.json({
            message: "wrong password",
          });
        }
      } else {
        res.json({ message: "user not found" });
      }
    } catch (error) {
      res.json(error);
    }
  }
  static async findUser(req, res) {
    try {
      const id = +req.params.id;
      const result = await user.findByPk(id, {
        include: [article],
      });
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = UserControllers;
