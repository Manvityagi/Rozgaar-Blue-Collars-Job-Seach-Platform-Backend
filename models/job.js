var mongoose = require("mongoose");
//SCHEMA SETUP
var jobSchema = new mongoose.Schema({
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
  deadline: Date,
  //   author: {
  //     id: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "JobPoster",
  //     },
  //     username: String,
  //   },
});

module.exports = mongoose.model("Job", jobSchema);
