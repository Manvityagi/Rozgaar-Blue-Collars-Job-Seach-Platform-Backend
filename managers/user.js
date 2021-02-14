let User = require("../models/user");

class UserManager {
  constructor() {
    this.user = User;
    // this.user.sync({ force: true });
  }

  async createUser(
    username,
    phoneNumber,
    aadharNumber,
    category,
    YOE,
    otherSkills,
    currentLocation,
    availibility,
    messageForRecruiter
  ) {
    // console.log("Reached manager");
    let user = {
      username: username,
      phoneNumber: phoneNumber,
      aadharNumber: aadharNumber,
      category: category,
      YOE: YOE,
      otherSkills: otherSkills,
      currentLocation: currentLocation,
      availibility: availibility,
      messageForRecruiter: messageForRecruiter,
    };
    try {
      const newUser = await this.user.create(user);
      return newUser;
    } catch (err) {
      //   console.log("ERROR IN USER MANAGER");
      throw err;
    }
  }
}

module.exports = UserManager;
