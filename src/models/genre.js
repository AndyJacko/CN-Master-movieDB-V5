const { sequelize } = require("../db/conn");
const { DataTypes } = require("sequelize");

const Genre = sequelize.define("Genre", {
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
});

module.exports = Genre;
