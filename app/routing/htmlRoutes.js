var path = require("path");

module.exports = function(app) {
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../FriendFinderApp/survey.html"));
    });
  
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../FriendFinderApp/index.html"));
    });
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../FriendFinderApp/index.html"));
    });

  }
