let mongoose = require("mongoose");
//SCHEMA SETUP
let jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
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
  location: {
    type: String,
    required: true,
  },
  description: String,
  offeredSalary: Number,
  numberOfPositions: {
    type: Number,
    default: 1,
  },
  recruiterEmailId: {
    type: String,
    required: true,
  },
  recruiterPhoneNumber: {
    type: Number,
    required: true,
  },
  // author: {
  //   id: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  //   username: String,
  // },
});

module.exports = mongoose.model("Job", jobSchema);
