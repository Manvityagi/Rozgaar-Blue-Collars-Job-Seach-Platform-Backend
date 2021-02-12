let Job = require("../models/job"),
  User = require("../models/user"),
  sendMail = require("../services/functions/mail");
// sendSMS = require("../services/functions/sms");

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

async function applyToAJob(req, res) {
  let job_id = req.params.job_id;
  let aadharNumber = req.body.aadharNumber;
  let job, applicant;

  try {
    applicant = await User.findOne({ aadharNumber: aadharNumber });
  } catch (err) {
    return res.status(404).send("Something wen wrong");
  }
  if (!applicant) {
    return res
      .status(404)
      .send("Please update your profile first and then apply");
  }

  try {
    job = await Job.findById(job_id);
    //Find recruiter email and phone number through job_id
    recruiterEmailId = job.recruiterEmailId;
    recruiterPhoneNumber = job.recruiterPhoneNumber;
    // const msg = createMessage();
  } catch (err) {
    return res.status(404).send("Job doesn't exist");
  }

  //req.body - aadhar number of applicant
  // if(200) - OK
  //else redirect user to update profile first
  res.status(200).send("Your application has been sent!");
  // const result = { job: job, applicant: applicant };
  // res.send(result);
}

result = {
  getAllJobs: getAllJobs,
  postNewJob: postNewJob,
  getAllCandidates: getAllCandidates,
  applyToAJob: applyToAJob,
};

module.exports = result;
