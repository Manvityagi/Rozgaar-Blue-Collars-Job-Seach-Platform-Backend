let mongoose = require("mongoose");
//SCHEMA SETUP
let jobSchema = new mongoose.Schema({
  title: String,
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
  location: String,
  description: String,
  offeredSalary: Number,
  numberOfPositions: Number,
  // author: {
  //   id: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  //   username: String,
  // },
});

module.exports = mongoose.model("Job", jobSchema);
