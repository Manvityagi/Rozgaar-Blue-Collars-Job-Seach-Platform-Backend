var express = require("express"),
  router = express.Router(),
  User = require("../models/user");

router.use(methodOverride("_method"));
