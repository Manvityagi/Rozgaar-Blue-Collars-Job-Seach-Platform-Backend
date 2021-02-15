class JobController {
  constructor(jobService) {
    this.jobService = jobService;
  }

  async getAllJobs(req, res) {
    const category = req.query.CATEGORY;
    console.log("Reached controller");
    console.log(category);
    try {
      let allJobs = await this.jobService.getAllJobs(category);
      console.log("Result from controller", allJobs);
      return res.status(201).json({
        jobs: allJobs,
      });
    } catch (err) {
      console.log("ERROR IN getAllJobs JOBCONTROLLER");
      return res.status(500).send(err);
    }
  }

  async createJob(req, res) {
    const {
      title,
      recruiterEmailId,
      recruiterPhoneNumber,
      category,
      description,
      location,
      offeredSalary,
      numberOfPositions,
    } = req.body;

    console.log("Reached controller");
    console.log(req.body);
    try {
      const job = await this.jobService.createJob(
        title,
        recruiterEmailId,
        recruiterPhoneNumber,
        category,
        description,
        location,
        offeredSalary,
        numberOfPositions
      );
      return res.status(201).json({
        data: job,
      });
    } catch (err) {
      console.log("Error being sent from backend", err);
      return res.status(400).send(err);
    }
  }

  async getAllCandidates(req, res) {
    const category = req.query.CATEGORY;
    console.log("controller", category);
    try {
      let allCandidates = await this.jobService.getAllCandidates(category);
      return res.status(200).json({
        candidates: allCandidates,
      });
    } catch (err) {
      console.log("ERROR IN getAllCandidates JOBCONTROLLER");
      return res.status(500).send(err);
    }
  }

  async applyToAJob(req, res) {
    let job_id = req.params.job_id,
      aadharNumber = req.body.aadharNumber;
    console.log("Controller", job_id, aadharNumber);
    try {
      await this.jobService.applyToAJob(job_id, aadharNumber);
      return res.status(200).send("Your application has been sent");
    } catch (err) {
      console.log("ERROR IN applyjob JOBCONTROLLER");
      return res.status(500).send(err);
    }
  }
}

module.exports = JobController;
