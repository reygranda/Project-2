var db = require("../models");

module.exports = function(app) {
  // Get all NBA players
  app.get("/api/NbaPlayers", function(req, res) {
    db.NbaPlayers.findAll({}).then(function(dbNbaPlayers) {
      res.json(dbNbaPlayers);
    });
  });

  // Create a new User
  app.post("/api/Users", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
  
  // Delete an user by Id
  app.delete("/api/Users/:id", function(req, res) {
    db.Users.destroy({ where: { userId: req.params.id } }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
};