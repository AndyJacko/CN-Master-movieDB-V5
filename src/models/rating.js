const { sequelize } = require("../db/conn");
const { DataTypes } = require("sequelize");

const Rating = sequelize.define("Rating", {
  rating: { type: DataTypes.STRING, allowNull: false, unique: true },
  description: { type: DataTypes.STRING, defaultValue: "Not Specified" },
});

module.exports = Rating;
