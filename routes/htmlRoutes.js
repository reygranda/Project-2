var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
<<<<<<< HEAD
    res.sendFile(path.join(__dirname + ""));
=======
    res.render('index', {
      style: 'index.css',
      title: 'Home'
    });
>>>>>>> 5f7193e3530fecd43df2b4967516969507c06153
  });

  // Load example page and pass in an example by id
  app.get("/draft", function(req, res) {
      res.render('draft', {
        style: 'draft.css'
      });
    });
  
  
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
<<<<<<< HEAD
};

=======
}
>>>>>>> 5f7193e3530fecd43df2b4967516969507c06153
