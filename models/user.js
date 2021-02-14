let mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  // password: String,
  phoneNumber: {
    type: Number,
    required: true,
  },
  aadharNumber: {
    type: String,
    required: true,
    minLength: 12,
    maxLength: 12,
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
  otherSkills: String,
  currentLocation: String,
  availibility: {
    type: Date,
    required: true,
  },
  messageForRecruiter: String,
});

UserSchema.index({ username: 1, category: 1 }, { unique: true });

module.exports = mongoose.model("User", UserSchema);
