let express = require("express"),
  router = express.Router(),
  methodOverride = require("method-override"),
  UserController = require("../controllers/user"),
  UserService = require("../services/user"),
  UserManager = require("../managers/user");

const userManager = new UserManager(),
  userService = new UserService(userManager),
  userController = new UserController(userService);

router.use(methodOverride("_method"));

router.post("/register", (req, res) => userController.createUser(req, res));

module.exports = router;
