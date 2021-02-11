let Job = require("../models/job");
let middlewareObj = {};

middlewareObj.isLoggedIn = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send("You need to be logged in to that!");
};

module.exports = middlewareObj;
