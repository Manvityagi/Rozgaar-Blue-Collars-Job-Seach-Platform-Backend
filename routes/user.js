let express = require("express"),
  router = express.Router(),
  User = require("../models/user"),
  methodOverride = require("method-override");

router.use(methodOverride("_method"));

router.post("/register", function (req, res) {
  User.create(req.body, function (err, newlyCreatedUser) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      return res.send(newlyCreatedUser);
    }
  });
});

module.exports = router;
