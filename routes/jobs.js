var express = require("express"),
  router = express.Router(),
  Job = require("../models/job"),
  //   Comment = require("../models/comment"),
  methodOverride = require("method-override"),
  mongoose = require("mongoose");
//   middleware = require("../middleware");

router.use(methodOverride("_method"));

router.get("/", function (req, res) {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

//INDEX - show all jobs
router.get("/", function (req, res) {
  Job.find({}, function (err, alljobs) {
    if (err) {
      res.send(err);
      //   res.sendStatus(500); //not sending any message
    } else {
      res.render("jobs/index", {
        jobs: alljobs,
        currentUser: req.user,
      });
    }
  });
});

// //CREATE - add new job to DB
router.post("/", function (req, res) {
  // get data from form and add to jobs array
  
  console.log(req.body);
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
    // author: { id: req.user._id, username: req.user.username },
  };
  // Create a new job and save to DB
  Job.create(newJob, function (err, newlyCreated) {
    if (err) {
      res.send(err);
    } else {
      console.log("making job")
      res.send(newJob); //or simply res.sendstatus(200)
    }
  });
});

// //SHOW - show info about one job
// router.get("/:id", function (req, res) {
//   //find the cg with provided id
//   Job.findById(req.params.id)
//     .populate("comments")
//     .exec(function (err, foundJob) {
//       if (err) {
//         console.log(err);
//       } else {
//         res.render("jobs/show", { job: foundJob });
//       }
//     });
//   //render show with that cg
// });

// // EDIT CAMPGROUND ROUTE
// router.get("/:id/edit", middleware.checkJobOwnership, function (req, res) {
//   Job.findById(req.params.id, function (err, foundJob) {
//     if (err) {
//       console.log(err);
//       res.redirect("/jobs");
//     } else {
//       res.render("jobs/edit", { job: foundJob });
//     }
//   });
// });

// // UPDATE CAMPGROUND ROUTE
// // PUT - updates job in the database
// router.put("/:id", middleware.isLoggedIn, function (req, res) {
//   Job.findByIdAndUpdate(
//     req.params.id,
//     req.body.job,
//     function (err, updatedjob) {
//       if (err) {
//         res.redirect("/jobs");
//       } else {
//         res.redirect("/jobs/" + req.params.id);
//       }
//     }
//   );
// });

// // DELETE CAMPGROUND ROUTE
// router.delete("/:id", middleware.checkJobOwnership, function (req, res) {
//   //destroy blog
//   Job.findByIdAndRemove(req.params.id, function (err) {
//     if (err) {
//       res.redirect("/jobs");
//     } else {
//       res.redirect("/jobs");
//     }
//   });
//   //redirect
// });

module.exports = router;
