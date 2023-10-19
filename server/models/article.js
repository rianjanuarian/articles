'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      article.belongsTo(models.user)
    }
  }
  article.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    posting: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: function(user,options){
        user.posting = user.posting || 0
       
      }
    },
    sequelize,
    modelName: 'article',
  });
  return article;
};