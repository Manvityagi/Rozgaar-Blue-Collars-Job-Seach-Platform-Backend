let sendMail = require("../commons/mail"),
  util = require("../commons/util"),
  sendSMS = require("../commons/sms");

class JobService {
  constructor(jobManager) {
    this.jobManager = jobManager;
  }
  async getAllJobs(category) {
    console.log("Reached service", category);
    try {
      let allJobs = await this.jobManager.getAllJobs(category);
      console.log("Result from services", allJobs);
      return allJobs;
    } catch (err) {
      console.log("ERROR IN getAllJobs JOBSERVICE");
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
    // Create a new job and save to DB
    try {
      let newJob = await this.jobManager.createJob(
        title,
        recruiterEmailId,
        recruiterPhoneNumber,
        category,
        description,
        location,
        offeredSalary,
        numberOfPositions
      );
      return newJob;
    } catch (err) {
      console.log("ERROR IN postNewjob JOBSERVICE");
      throw err;
    }
  }

  async getAllCandidates(category) {
    try {
      let allCandidates = await this.jobManager.getAllCandidates(category);
      return allCandidates;
    } catch (err) {
      console.log("ERROR IN getAllCandidates JOBSERVICE");
      throw err;
    }
  }

  async applyToAJob(job_id, aadharNumber) {
    try {
      let {
        recruiterEmailId,
        recruiterPhoneNumber,
        jobCategory,
        recruiterName,
        applicantUsername,
        applicantPhoneNumber,
        applicantCategory,
        applicantOtherSkills,
        applicantYOE,
        applicantAvailability,
      } = await this.jobManager.applyToAJob(job_id, aadharNumber);
      console.log(
        "SERVICES",
        recruiterEmailId,
        recruiterPhoneNumber,
        jobCategory,
        recruiterName,
        applicantUsername,
        applicantPhoneNumber,
        applicantCategory,
        applicantOtherSkills,
        applicantYOE,
        applicantAvailability
      );
      let msg = util.createMessageForRecruiter(
        applicantUsername,
        applicantPhoneNumber,
        applicantCategory,
        applicantOtherSkills,
        applicantYOE,
        applicantAvailability
      );
      // console.log(msg);
      sendMail(recruiterEmailId, msg);
      const recruiterPhone = "+91" + recruiterPhoneNumber;
      sendSMS(recruiterPhone, msg);

      msg = util.createMessageForApplicant(
        applicantUsername,
        jobCategory,
        recruiterName
      );
      // console.log(msg);
      const applicantPhone = "+91" + applicantPhoneNumber;
      sendSMS(applicantPhone, msg);
    } catch (err) {
      console.log("ERROR IN applyToAJob JOBSERVICE", err);
      throw err;
    }
  }
}

module.exports = JobService;
