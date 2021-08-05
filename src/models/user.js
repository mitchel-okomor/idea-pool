'use strict';
const Joi = require('joi');
const { Model } = require('sequelize');
const { joiValidate } = require('../helpers/joi');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
        allowNull: false,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  // eslint-disable-next-line no-unused-vars
  User.validatePostData = async function (req, excludeId) {
    const schema = Joi.object({
      email: Joi.string().required().max(45).email({ minDomainSegments: 2 }),
      name: Joi.string().required().max(255),
      password: Joi.string().required(),
    });

    return joiValidate(schema, req, true);
  };
  return User;
};
