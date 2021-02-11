var mongoose = require("mongoose");

//SCHEMA SETUP
var jobSchema = new mongoose.Schema({
  job: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },
  },
  applicant: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
});

module.exports = mongoose.model("Application", jobSchema);
