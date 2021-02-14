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
    minLength: 10,
    maxLength: 10,
    validate: /^\d{10}$/,
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
  messageForRecruiter: {
    type: String,
    maxLength: 100,
  },
});

UserSchema.index({ aadharNumber: 1, category: 1 }, { unique: true });

module.exports = mongoose.model("User", UserSchema);
