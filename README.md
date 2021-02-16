# Rozgaar Job Search App for Blue Collar Workers

![Alt Text](https://media.giphy.com/media/A8pRmkexvl9jCdzS5D/giphy.gif)

## ❓ Problem Statement

- Make a job-search platofrm for Blue Collar Workers.

## [VIEW LIVE DEMO](https://practical-jepsen-534aed.netlify.app/)

**Note** : SMS can be sent to only Twilio verified numbers as I am not using the paid service.

## 🚧 Technology Stack

- **Server Enviornment** - NodeJS
- **Framework** - ExpressJS
- **Frontend** - ReactJS, HTML, CSS, Javascript
- **Database** - MongoDB
- **Cloud database service** - MongoDB Atlas
- **Module to send emails** - NodeMailer
- **SMS sending** - Twilio
- **Deployment** - Heroku

## ⬇️ Installation

- First, fork this repository 🍴 and follow the given instructions:

```
# clone the repository to your local machine
$ git clone `git clone https://github.com/<YOUR-GITHUB-USERNAME>/Rozgaar-Blue-Collars-Job-Seach-Platform-Backend.git`

# navigate to the project's directory and install all the relevant dev-dependencies
$ cd Rozgaar-Blue-Collars-Job-Seach-Platform-Backend && npm intsall

# Make a .env file and include the details as per config.js

# Start application
$ node index.js

# Make requests on http://localhost:3030/ from Postman
```

#### Problems in Existing Solutions

- Little Less user friendly for maybe not so literate people
- Complicated Process - Blue Collars dont have a resume.
- Longer waiting Periods for both applicant and employer.
- All in English
- Lack of Support on chat/call

## Workflow

I have identified 9 categories of job-seekers to make the platform more intuitive and simple.

- Electrician
- Plumber
- Labour
- Driver
- Maid
- Security guard
- Cook
- Peon
- Mechanic

### For Job Seeker

1. Register
2. Update Profile
3. Apply on jobs - just by clicking - as simple as that.
4. The applicant gets an SMS on his/her phone number after applying to a job.
   ![SMS TO APPLICANT](https://github.com/Manvityagi/Rozgaar-Blue-Collars-Job-Seach-Platform-Backend/raw/main/assets/msgToApplicant.jpg)

### For Job Poster

1. Post Jobs
2. Get applications on your posted jobs and shortlist.
3. **Ease the flow** for both parties
   - Job Seekers Profiles will be available all throughout, Recruiters can directly see their profiles and give them a message/call
4. Job Poster gets an email when someone applies on a job posted by him/her.
   ![MAIL TO RECRUITER](https://github.com/Manvityagi/Rozgaar-Blue-Collars-Job-Seach-Platform-Backend/raw/main/assets/recruiterMail.PNG)

## Project Structure

We will structure our application using the controller, service, and, manager pattern so our app will be broken into the managers, services, and controllers. The `Manager-Service-Controller` pattern breaks up the business layer of the app into three distinct layers:

1. The `manager class` handles getting data into and out of our data store. A manager is used between the service layer and the model layer. For example, in the UserManager you would create methods that write/read a user to and from the database.
2. The `service class` calls the manager class and can combine their data to form new, more complex business objects. It is an abstraction between the controller and the manager.
3. A `controller` contains very little logic and is used to make calls to services.

## 🔨 API Endpoints

`/jobs`
| REQUEST METHODS | ENDPOINTS | DESCRIPTION |
| :-------------- | :-------: | ------------------: |
| GET | /jobs?CATEGORY=MECHANIC | Show all jobs of requested category |
| POST | /jobs | Add new job to DB by recruiter|
| POST | /jobs/:job_id/apply | Applies on a Job |
| GET | /jobs/candidates?CATEGORY=LABOUR | Returns available candidates for requested job|

`/user`
| REQUEST METHODS | ENDPOINTS | DESCRIPTION |
| :-------------- | :-------: | ------------------: |
| POST | /user/register | Adds new user to DB |

### [Pending Tasks](https://github.com/Manvityagi/Rozgaar-Blue-Collars-Job-Seach-Platform-Backend/blob/main/tests.md)

- Unit Tests - Due to shortage of time, I couldn't write many unit-test.
- Login Sessions and Dashboard of Applications

### Loophole in current solution

1. Hiding unavailable jobs/users

- Problem: The major problem in current solution is lack of mechanism of deleting jobs that have been filled and hiding job-seeker profiles who have already got a job
- Solution: This is easy to solve once user-sessions for both employer and applicant are created, on their
  dashboards, we can give the option to hide thier job/profile.

2. Verification of jobs/profiles

- Problem: The portal can be spammed with fake jobs/profiles.
- Solution: Verifying user-identity by Aadhar Number Verification/phone number verifcation.

### Additional Features to be added after Hackathon:

- Multi-lingual
- Filters according to location, salary etc.
- Stars/Reviews for job seekers
- Register by calling also (for job seekers) - simply call on a support number and automated clicks on phone

### Reaching Target Audience

- Awareness of the existence of a solution holds utmost importance.
- The first point of contact could be several NGOs - Lakshyam, Hand in Hand India, The /Nudge Foundation etc.
- The Internet is not something that Blue-Collar Workers don't use, Promotional Ads are the way to go.
- Referral System for both Employer and Seeker.
