const moment = require("moment");

function createMessageForRecruiter(
  applicantName,
  applicantPhone,
  applicantPrimarySkill,
  applicantOtherSkills,
  applicantYOE,
  applicantAvailability
) {
  applicantAvailability = moment(applicantAvailability).format("MMMM Do YYYY");
  const msg = `    
    A new applicant has applied on your job:
     Name : ${applicantName},
     Phone : ${applicantPhone},
     Primary Skill : ${applicantPrimarySkill},
     Other Skills : ${applicantOtherSkills},
     Years of Experience : ${applicantYOE},
     applicantAvailability : ${applicantAvailability}
    `;
  return msg;
}

function createMessageForApplicant(applicantName, jobName, recruiterName) {
  const msg = `${applicantName}, Your application for ${jobName} has been sent to ${recruiterName}. You will be contacted by them for further discussion.
    `;
  return msg;
}

utils = {
  createMessageForRecruiter: createMessageForRecruiter,
  createMessageForApplicant: createMessageForApplicant,
};

module.exports = utils;
