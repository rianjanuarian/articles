'use strict';
const {
  Model
} = require('sequelize');
const { encryptPwd } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function(user,options){
        user.image = user.image || "https://cdn.discordapp.com/attachments/1076057192945434624/1156221296691126344/avatars-000312484264-af28qp-t500x500.png?ex=6541017e&is=652e8c7e&hm=9c0bb2f554ebbfce3bc561ab3433eb1aa3a4e8e2081379eb3f39d44f1c047e81&"
        user.password = encryptPwd(user.password)
      }
    },
    sequelize,
    modelName: 'user',
  });
  return user;
};