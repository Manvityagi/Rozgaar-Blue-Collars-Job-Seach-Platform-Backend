const chai = require("chai"),
  sinon = require("sinon"),
  faker = require("faker"),
  jobService = require("../services/jobs"),
  JobModel = require("../models/job"),
  expect = chai.expect,
  assert = chai.assert;

// describe("getAllJobsTest", function () {
//   it("Unit Test Name", (done) => {
//     //assert.check();
//     done();
//   });
// });

let categories = [
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
];

function getFakeData() {
  const fakeData = {
    category: categories[faker.random.number % 10],
    _id: faker.random.uuid(),
    title: faker.name.findName(),
    location: faker.address.city,
    description: faker.description,
    offeredSalary: faker.number,
    numberOfPositions: faker.number,
  };
  return fakeData;
}

describe("getAllJobsTest", function () {
  let stubValue = [];
  for (i = 0; i < 5; i++) {
    stubValue.push(getFakeData());
  }
  it("should receive all jobs", async (done) => {
    const stub = sinon.stub(JobModel, "find").returns(stubValue);
    let jobs = await jobService.getAllJobs();
    expect(stub.calledOnce).to.be.true;
  });
});
