let mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
  },
  // password: String,
  phoneNumber: {
    type: String,
    validate: /^\d{10}$/,
    required: true,
  },
  /*
    It should have 12 digits.
    It should not start with 0 and 1.
    It should not contain any alphabet and special characters.
    It should have white space after every 4 digits.
  */
  aadharNumber: {
    type: String,
    required: true,
    unique: true,
    validate: /^\d{12}$/,
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
  YOE: {
    type: Number,
    defaut: 0,
  },
  otherSkills: {
    type: String,
    default: "NA",
  },
  currentLocation: {
    type: String,
    required: true,
  },
  availibility: {
    type: Date,
    required: true,
  },
  messageForRecruiter: {
    type: String,
    maxLength: 100,
  },
});

module.exports = mongoose.model("User", UserSchema);
