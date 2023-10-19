const { decryptPwd } = require("../helpers/bcrypt");
const { tokenGenerator } = require("../helpers/jsonwebtoken");
const { user } = require("../models");
class UserControllers {
  static async getUsers(req, res) {
    try {
      const result = await user.findAll();
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
      const { email, password } = req.body;
      let emailFound = await user.findOne({
        where: {
          email,
        },
      });
      if (emailFound) {
        if (decryptPwd(password, emailFound.password)) {
          let access_token = tokenGenerator(emailFound);
          let username = emailFound.username;
          let image = emailFound.image
          res.json({ access_token, username,image });
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
}

module.exports = UserControllers;