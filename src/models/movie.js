const { sequelize } = require("../db/conn");
const { DataTypes } = require("sequelize");

const Movie = sequelize.define("Movie", {
  title: { type: DataTypes.STRING, allowNull: false, unique: true },
  actor: { type: DataTypes.STRING, defaultValue: "Not Specified" },
  director: { type: DataTypes.NUMBER },
  genre: { type: DataTypes.NUMBER },
  rating: { type: DataTypes.NUMBER },
  released: { type: DataTypes.NUMBER },
});

module.exports = Movie;
