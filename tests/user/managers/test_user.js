const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const { UserModel } = require("../../../models/user");
const UserManager = require("../../../managers/user");

describe("UserManager", function () {
  const stubValue = {
    id: faker.random.uuid(),
    username: faker.name.findName(),
    phoneNumber: faker.phone.phoneNumber(),
    aadharNumber: "542864941720",
    availability: faker.date.future(),
  };
  describe("create", function () {
    it("should add a new user to the db", async function () {
      const stubValue = {
        id: faker.random.uuid(),
        username: faker.name.findName(),
        phoneNumber: faker.phone.phoneNumber(),
        aadharNumber: "542864941720",
        availability: faker.date.future(),
      };
      const stub = sinon.stub(UserModel, "create").returns(stubValue);
      const userManager = new UserManager();
      const user = await userManager.create(stubValue.name, stubValue.email);

      expect(stub.calledOnce).to.be.true;
      expect(user.id).to.equal(stubValue.id);
      expect(user.username).to.equal(stubValue.name);
      expect(user.phoneNumber).to.equal(stubValue.phoneNumber);
      expect(user.availability).to.equal(stubValue.availability);
    });
  });
});
