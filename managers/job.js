let Job = require("../models/job"),
  User = require("../models/user");
class JobManager {
  constructor() {
    this.job = Job;
  }

  async getAllJobs(category) {
    console.log("Reached manager", category);
    try {
      console.log("Hello?");
      let allJobs = await this.job.find({ category: category });
      console.log(allJobs);
      return allJobs;
    } catch (err) {
      console.log("ERROR IN getAllJobs JOBMANAGER");
      throw err;
    }
  }

  async createJob(
    title,
    recruiterEmailId,
    recruiterPhoneNumber,
    category,
    description,
    location,
    offeredSalary,
    numberOfPositions
  ) {
    let job = {
      title: title,
      recruiterEmailId: recruiterEmailId,
      recruiterPhoneNumber: recruiterPhoneNumber,
      category: category,
      description: description,
      location: location,
      offeredSalary: offeredSalary,
      numberOfPositions: numberOfPositions,
    };

    // Create a new job and save to DB
    try {
      let newJob = await this.job.create(job);
      return newJob;
    } catch (err) {
      console.log("ERROR IN postNewjob JOBMANAGER");
      throw err;
    }
  }

  async getAllCandidates(category) {
    try {
      console.log(category);
      let allCandidates = await User.find({ category: category });
      return allCandidates;
    } catch (err) {
      console.log("ERROR IN getAllCandidates JOBMANAGER", err);
      throw err;
    }
  }

  async applyToAJob(job_id, aadharNumber) {
    let job, applicant;
    try {
      applicant = await User.findOne({ aadharNumber: aadharNumber });
      if (!applicant) {
        console.log("Applicant not found");
        let errorMessage = "Please update your profile first and then apply";
        throw errorMessage;
      }
    } catch (err) {
      console.log("ERROR IN applyToAJob - finding applicant JOBMANAGER");
      throw err;
    }

    try {
      job = await Job.findById(job_id);
      //Find recruiter email and phone number through job_id
      if (!job) {
        console.log("job not found");
        let errorMessage = "Job doesnt exist";
        throw errorMessage;
      }
    } catch (err) {
      console.log("finding job failed");
      throw err;
    }

    let res = {
      recruiterEmailId: job.recruiterEmailId,
      recruiterPhoneNumber: job.recruiterPhoneNumber,
      jobCategory: job.category,
      recruiterName: job.title,
      applicantUsername: applicant.username,
      applicantPhoneNumber: applicant.phoneNumber,
      applicantCategory: applicant.category,
      applicantOtherSkills: applicant.otherSkills,
      applicantYOE: applicant.YOE,
      applicantAvailability: applicant.availability,
    };
    console.log("MANAGER", res);
    return res;
  }
}

module.exports = JobManager;
