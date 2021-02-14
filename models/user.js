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
  availability: {
    type: Date,
    required: true,
  },
  messageForRecruiter: {
    type: String,
    maxLength: 100,
  },
});

module.exports = mongoose.model("User", UserSchema);
