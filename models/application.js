let mongoose = require("mongoose");

//SCHEMA SETUP
let jobSchema = new mongoose.Schema({
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
