# Unit-Tests

- ## User

### UserManager

1. **Create User - Test Cases** <br/>
   (i) All valid Entries should add a new user to the DB. <br/>
   (ii) All data added should hold equality.<br/>
   (iii) Invalid Entries should result in status code - 400 for invalid
   request.<br/>
   (iv) Valid Entries should result in status code 201.<br/>
   (v) The returned schema is same as expected structure.<br/>
   (vi) Test to check failure when duplicate aadharNumber entry is made.<br/> <br/>
   Simlar Tests for `UserController` & `UserServices` by using stubs for dependencies.<br/>

- ## Job

### JobManager

1. **getAllJobs - Test Cases** <br/>
   (i) Should return an array of Job Objects.<br/>
   (ii) Should return an empty array in case of invalid category. <br/>
2. **createJob - Test Cases** <br/>
   (i) All valid Entries should add a new job to the DB. <br/>
   (ii) All data added should hold equality. <br/>
   (iii) Invalid Entries should result in status code - 400 for invalid.
   request. <br/>
   (iv) Valid Entries should result in status code 201. <br/>
   (v) The returned schema is same as expected structure. <br/>
3. **getAllCandidates - Test Cases** <br/>
   (i) Should return an array of Job Objects. <br/>
   (ii) Should return an empty array in case of invalid category. <br/>
4. **applyToAJob - Test Cases** <br/>
   (i) Valid job_id and aadharNumber should call the sendSMS function twice and sendMail function once. <br/>
   (ii) aadharNumber which doesn't yet exixts in the Users Collection should give an error. <br/>
   (iii) Inavlid Job Id shall throw error. <br/>
   (iv) Invalid Phone Number/Email-Id throws Error - JobServices. <br/><br/>
   Simlar Tests for `JobController` & `JobServices` by using stubs for dependencies. <br/>
