const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// creates User model
class User extends Model {}

// define table columns and configuration

User.init(
  {
    // Table column definitions go here
  },
  {
    //  Table config options go here

    sequelize,

    timestamps: false,

    freezeTableName: true,

    underscored: true,

    modelName: "user",
  }
);

module.exports = User;
