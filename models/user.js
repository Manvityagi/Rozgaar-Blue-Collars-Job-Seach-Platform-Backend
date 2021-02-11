var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  phoneNumber: {
    type: Number,
    required: true,
    default: 0,
  },
  aadharNo: {
    type: String,
  },
  YOE: Number,
  skills: Array,
  currentLocation: String,
  availbility: Date,
  messageForRecruiter: String,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
