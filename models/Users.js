module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: DataTypes.STRING,
    age: DataTypes.INTEGER
  });
  return Users;
};
