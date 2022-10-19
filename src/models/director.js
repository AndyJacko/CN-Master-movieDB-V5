const { sequelize } = require("../db/conn");
const { DataTypes } = require("sequelize");

const Director = sequelize.define("Director", {
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
});

module.exports = Director;
