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

- Job Seekers can post theri profile and availability which will be visible by users
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

2. Get jobs as per category - CATEGORY needed in query params in request from frontend
   `GET - https://pacific-taiga-02637.herokuapp.com/jobs/?CATEGORY=ELECTRICIAN`

3. APPLY - This API has to be hit when user clicks on apply
   `POST - https://pacific-taiga-02637.herokuapp.com/jobs/:job_id/apply`

4. Register Job Seeker
   `POST - https://pacific-taiga-02637.herokuapp.com/user/register`
   ```
   {
   "username": "String",
   "phoneNumber": "987654321",
   "aadharNo": "523898134",
   "category": "MECHANIC",
   "YOE": "1",
   "otherSkills": "",
   "currentLocation": "Lucknow",
   "availbility": "03.01.2021",
   "messageForRecruiter": "I am very hard working"
   }
   ```

```

5. Get List of candidates
   `GET - http://localhost:3030/jobs/candidates/?CATEGORY=MECHANIC`

## 🔨 API Endpoints

Index
| REQUEST METHODS | ENDPOINTS | DESCRIPTION |
| :-------------- | :-------: | ------------------: |
| GET | /register | Render signup page |
| POST | /register | Handle Signup Logic |
| POST | /login | Render Login Page |
| POST | /login | Handle Login logic |
| GET | /logout | Logs out the user |

`/campgrounds`
| REQUEST METHODS | ENDPOINTS | DESCRIPTION |
| :-------------- | :-------: | ------------------: |
| GET | / | Show all Campgrounds |
| POST | / | Add new campground to DB |
| GET | /new | Render post form |
| GET | /:id | Show details of campground with id |
| GET | /:id/edit | Render edit form |
| PUT | /:id/ | Do the edit logic |
| DELETE | /:id | Delete campground with id |

`/campgrounds/:id/comments`
| REQUEST METHODS | ENDPOINTS | DESCRIPTION |
| :-------------- | :-------: | ------------------: |
| POST | / | Add new comment to current campground |
| GET | /new | Render comment form |
| PUT | /:id/ | Do the comment edit logic |
| DELETE | /:id | Delete comment with id |
```
