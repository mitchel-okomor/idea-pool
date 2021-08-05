'use strict';
const { Model } = require('sequelize');
const { joiValidate } = require('../helpers/joi');
const Joi = require('joi');

module.exports = (sequelize, DataTypes) => {
  class Idea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Idea.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }
  }

  Idea.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      text: { type: DataTypes.STRING, allowNull: false },
      impact: { type: DataTypes.INTEGER, allowNull: false },
      ease: { type: DataTypes.INTEGER, allowNull: false },
      confidence: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Idea',
    }
  );

  Idea.validatePostData = async function (req) {
    const schema = Joi.object({
      text: Joi.string().required(),
      impact: Joi.number().required(),
      ease: Joi.number().required(),
      confidence: Joi.number().required(),
    });

    return joiValidate(schema, req, true);
  };
  return Idea;
};
