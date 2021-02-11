let express = require("express"),
  router = express.Router(),
  Job = require("../models/job"),
  passport = require("passport"),
  User = require("../models/user");

//=========AUTH ROUTES===========//

//handle sign up logic
router.post("/register", function (req, res, next) {
  let newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, function (err, user) {
    if (err) {
      res.sendStatus(500);
      return next(err);
    }
    passport.authenticate("local")(req, res, function () {
      return res.sendStatus(200);
    });
  });
});

//handle login logic
router.post("/login", function (req, res, next) {
  passport.authenticate("local", function (err, user) {
    if (err) {
      res.sendStatus(500);
    }
    if (!user) {
      res.sendStatus(401);
    }

    // make passportjs setup the user object, serialize the user, ...
    req.login(user, {}, function (err) {
      if (err) {
        res.sendStatus(500);
      }
      res.sendStatus(200);
    });
  })(req, res, next);
  return;
});

//logout route
router.get("/logout", function (req, res) {
  req.logout();
  res.status(200).send("Logged you out");
});

module.exports = router;
