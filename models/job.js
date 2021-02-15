let mongoose = require("mongoose");
//SCHEMA SETUP
let jobSchema = new mongoose.Schema({
  title: {
    //recruiter name
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
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
    minLength: 2,
    maxLength: 50,
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
    minLength: 5,
    maxLength: 50,
  },
  recruiterPhoneNumber: {
    type: String,
    minLength: 10,
    maxLength: 10,
    validate: /^\d{10}$/,
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
