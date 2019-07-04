module.exports = function(sequelize, DataTypes) {
  var NbaPlayers = sequelize.define("NbaPlayers", {
    playerId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    FG: DataTypes.INTEGER,
    PPG: DataTypes.INTEGER,
    RPG: DataTypes.INTEGER,
    APG: DataTypes.INTEGER
  });
  return NbaPlayers;
};