const { sequelize } = require("../db/conn");
const { DataTypes } = require("sequelize");

const Rating = sequelize.define("Rating", {
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
});

module.exports = Rating;
