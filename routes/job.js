let express = require("express"),
  methodOverride = require("method-override"),
  JobController = require("../controllers/job"),
  JobService = require("../services/job"),
  JobManager = require("../managers/job"),
  router = express.Router(),
  Job = require("../models/job");

const jobManager = new JobManager(),
  jobService = new JobService(jobManager),
  jobController = new JobController(jobService);
router.use(methodOverride("_method"));

//INDEX - show all jobs
router.get("/", (req, res) => jobController.getAllJobs(req, res));

// //CREATE - add new job to DB
router.post("/", (req, res) => jobController.createJob(req, res));

//Get availalble candidates of a job
router.get("/candidates", (req, res) =>
  jobController.getAllCandidates(req, res)
);

//Apply to a job
router.post("/:job_id/apply", (req, res) =>
  jobController.applyToAJob(req, res)
);

module.exports = router;
