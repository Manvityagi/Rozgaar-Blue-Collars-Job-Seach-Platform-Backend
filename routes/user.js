let express = require("express"),
  router = express.Router(),
  methodOverride = require("method-override"),
  userService = require("../services/user");

router.use(methodOverride("_method"));

router.post("/register", userService.postUser);

module.exports = router;
