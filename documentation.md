#### Problems in Existing Solutions
- Little Less user friendly for maybe not so literate people 
- Complicated Process - Blue Collars dont have a resume.
- All in English
- Lack of Support on chat/call

## Workflow

#### Job Seeker End

1. Register
2. Update Profile
3. Apply on jobs - just by clicking - as simple as that.

#### Job Poster

1. Post Jobs
2. See the people who applied to your posted jobs and shortlist
3. **Ease the flow** for both parties
   - Job Seekers Profiles will be avaiable all throughout, Recruiters can directly see their profiles and give them a message/call

### Additional Features to be added after Hackathon:

- Job Seekers can post theri profile and availibility which will be visible by users
- Stars/Reviews for job seekers
- Register by calling also (for job seekers) - simply call on a support number and automated clicks on phone
- Multi-lingual

#### CREATED APIs

1.  CREATE JOB
    `POST - https://pacific-taiga-02637.herokuapp.com/jobs `
    form data in req.body needed from frontend for creation

```
title: String,
    category: {
    type: String,
    enum: [
      "OTHERS",
      "ELECTRICIAN",
      "PLUMBER",
      "LABOUR",
      "DRIVER",
      "MAID",
      "SECURITY GUARD",
      "COOK",
      "PEON",
      "MECHANIC",
    ],
    default: "OTHERS",
  },
  location: String,
  description: String,
  offeredSalary: Number,
  numberOfPositions: Number
```

2.  Register/signup API -
    `POST - https://pacific-taiga-02637.herokuapp.com/register`

```
req.body
username: String,
password: String
```

3. Login API -
   `POST - https://pacific-taiga-02637.herokuapp.com/login `

```
req.body
username: String,
password: String
```

4. Logout API
   `GET - https://pacific-taiga-02637.herokuapp.com/logout`

5. Get jobs as per category - CATEGORY needed in query params in request from frontend
   `GET - https://pacific-taiga-02637.herokuapp.com/jobs/?CATEGORY=ELECTRICIAN`

6. APPLY - This API has to be hit when user clicks on apply
   `POST - https://pacific-taiga-02637.herokuapp.com/jobs/:job_id/apply`

PENDING APIS:

1. Patch API for updating user profile
2. GET - /jobs/<:job_id>/applicants - Will return applicants of a job with job_id
   GET - /user/<:user_id>/applied_jobs - Will return jobs to which user_id applied
