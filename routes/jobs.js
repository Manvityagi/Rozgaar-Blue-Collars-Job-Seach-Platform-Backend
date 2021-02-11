var express = require("express"),
  router = express.Router(),
  Job = require("../models/job"),
  Application = require("../models/application"),
  methodOverride = require("method-override"),
  mongoose = require("mongoose"),
  middleware = require("../middlewares");

router.use(methodOverride("_method"));

//INDEX - show all jobs
router.get("/", function (req, res) {
  // console.log(`query string: ${req.query.CATEGORY}`)
  const category = req.query.CATEGORY;
  Job.find({ category: category }, function (err, alljobs) {
    if (err) {
      res.sendStatus(500); //not sending any message
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
  // get data from form and add to jobs array
  // console.log(req.body);
  const {
    title,
    category,
    location,
    description,
    offeredSalary,
    numberOfPositions,
  } = req.body;

  const newJob = {
    title,
    category,
    location,
    description,
    offeredSalary,
    numberOfPositions,
    author: { id: req.user._id, username: req.user.username },
  };
  // Create a new job and save to DB
  Job.create(newJob, function (err, newlyCreated) {
    if (err) {
      res.send(err);
    } else {
      console.log("making job");
      console.log(newlyCreated);
      res.send(newJob); //or simply res.sendstatus(200)
    }
  });
});

//Apply to a job
router.post("/:job_id", middleware.isLoggedIn, function (req, res) {
  const user_id = req.user._id,
    job_id = req.params["job_id"];

  Application.create({}, function (err, newlyCreatedApplication) {
    if (err) {
      res.send(err);
    } else {
      newlyCreatedApplication.job.id = user_id;
      newlyCreatedApplication.applicant.id = job_id;
      newlyCreatedApplication.save();

      // job.newlyCreatedApplications.push(newlyCreatedApplication);
      // job.save();

      // console.log(`Newly created application ${newlyCreatedApplication}`);
      res.send(newlyCreatedApplication);
    }
  });
});

//For each jobs, get applicants
router.get("/:job_id/applicants", function (req, res) {
  Application.findById(req.params.job_id)
    .populate("users")
    .exec(function (err, allApplicants) {
      if (err) {
        res.send(err);
      } else {
        res.send(allApplicants);
      }
    });
});

// //SHOW - show info about one job
// router.get("/:id", function (req, res) {
//   //find the cg with provided id
//   Job.findById(req.params.id)
//     .populate("newlyCreatedApplications")
//     .exec(function (err, foundJob) {
//       if (err) {
//         console.log(err);
//       } else {
//         res.render("jobs/show", { job: foundJob });
//       }
//     });
//   //render show with that cg
// });

module.exports = router;
