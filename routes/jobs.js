let express = require("express"),
  router = express.Router(),
  Job = require("../models/job"),
  User = require("../models/user"),
  methodOverride = require("method-override");

router.use(methodOverride("_method"));

//INDEX - show all jobs
router.get("/", function (req, res) {
  const category = req.query.CATEGORY;
  Job.find({ category: category }, function (err, alljobs) {
    if (err) {
      res.sendStatus(500);
    } else {
      const result = {
        jobs: alljobs,
      };
      res.send(result);
    }
  });
});

// //CREATE - add new job to DB
router.post("/", function (req, res) {
  // Create a new job and save to DB
  Job.create(req.body, function (err, newlyCreated) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      return res.send(newJob);
    }
  });
});

//Get availalble candidates of a job
router.get("/candidates", function (req, res) {
  const category = req.query.CATEGORY;
  User.find({ category: category }, function (err, allCandidates) {
    if (err) {
      res.sendStatus(500);
    } else {
      const result = {
        candidates: allCandidates,
      };
      res.send(result);
    }
  });
});

//Apply to a job
router.post("/:email_id/:phoneNumber", function (req, res) {
  //req.body - aadhar number of applicant
  // if(200) - OK
  //else redirect user to update profile first
});









//For each jobs, get applicants
// router.get("/:job_id/applicants", function (req, res) {
//   Application.findById(req.params.job_id)
//     .populate("users")
//     .exec(function (err, allApplicants) {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send(allApplicants);
//       }
//     });
// });

module.exports = router;
