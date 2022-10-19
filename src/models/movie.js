const { sequelize } = require("../db/conn");
const { DataTypes } = require("sequelize");

const Movie = sequelize.define("Movie", {
  title: { type: DataTypes.STRING, allowNull: false, unique: true },
  actor: { type: DataTypes.STRING, defaultValue: "Not Specified" },
  director: { type: DataTypes.INTEGER },
  genre: { type: DataTypes.INTEGER },
  rating: { type: DataTypes.INTEGER },
  released: { type: DataTypes.INTEGER },
});

module.exports = Movie;
