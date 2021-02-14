let User = require("../models/user");

function postUser(req, res) {
  User.create(req.body, function (err, newlyCreatedUser) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      return res.send(newlyCreatedUser);
    }
  });
}

result = {
  postUser: postUser,
};

module.exports = result;
