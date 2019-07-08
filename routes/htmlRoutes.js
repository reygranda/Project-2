var db = require("../models");
console.log(db);
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {
      style: "index.css",
      title: "Home"
    });
  });

  // Load example page and pass in an example by id
  app.get("/draft", function(req, res) {
    res.render("draft", {
      style: "draft.css"
    });
  });
  
  
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
