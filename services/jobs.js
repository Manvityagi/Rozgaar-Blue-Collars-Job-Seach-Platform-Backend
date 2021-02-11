let Job = require("../models/job"),
  User = require("../models/user");

function getAllJobs(req, res) {
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
}

function postNewJob(req, res) {
  // Create a new job and save to DB
  Job.create(req.body, function (err, newlyCreated) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      return res.send(newJob);
    }
  });
}

function getAllCandidates(req, res) {
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
}

result = {
  getAllJobs: getAllJobs,
  postNewJob: postNewJob,
  getAllCandidates: getAllCandidates,
};

module.exports = result;
