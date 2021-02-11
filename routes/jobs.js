let express = require("express"),
  router = express.Router(),
  Job = require("../models/job"),
  User = require("../models/user"),
  methodOverride = require("method-override");
// import { getAllJobs, postNewJob, getAllCandidates } from "../services/jobs";
jobService = require("../services/jobs");

router.use(methodOverride("_method"));

//INDEX - show all jobs
router.get("/", jobService.getAllJobs);

// //CREATE - add new job to DB
router.post("/", jobService.postNewJob);

//Get availalble candidates of a job
router.get("/candidates", jobService.getAllCandidates);

//Apply to a job
router.post("/:job_id", function (req, res) {
  //Find recruiter email and phone number through job_id
  //req.body - aadhar number of applicant
  // if(200) - OK
  //else redirect user to update profile first
});

module.exports = router;
