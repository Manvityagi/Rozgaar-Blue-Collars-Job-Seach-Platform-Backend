function createMessage(
  applicantName,
  applicantPhone,
  applicantPrimarySkill,
  applicantOtherSkills,
  applicantYOE,
  applicantAvailability
) {
  const msg = `    
    A new applicant has applied on your job:
     Name : ${applicantName},
     Phone : ${applicantPhone},
     Primary Skill : ${applicantPrimarySkill},
     Other Skills : ${applicantOtherSkills},
     Email : ${applicantPrimarySkill},
    Check-in Time : ${applicantAvailability}
    `;
  return msg;
}

utils = {
  createMessage: createMessage,
};

module.exports = utils;
