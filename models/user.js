let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

let UserSchema = new mongoose.Schema({
  username: String,
  // password: String,
  phoneNumber: {
    type: Number,
    required: true,
    default: 0,
  },
  aadharNo: {
    type: String,
  },
  category: {
    type: String,
    enum: [
      "OTHERS",
      "ELECTRICIAN",
      "PLUMBER",
      "LABOUR",
      "DRIVER",
      "MAID",
      "SECURITY GUARD",
      "COOK",
      "PEON",
      "MECHANIC",
    ],
    default: "OTHERS",
  },
  YOE: Number,
  otherSkills: String,
  currentLocation: String,
  availibility: Date,
  messageForRecruiter: String,
});

// UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
