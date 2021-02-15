let User = require("../models/user");

class UserManager {
  constructor() {
    this.user = User;
  }

  async createUser(
    username,
    phoneNumber,
    aadharNumber,
    category,
    YOE,
    otherSkills,
    currentLocation,
    availability,
    messageForRecruiter
  ) {
    console.log("Reached manager", availability);
    let user = {
      username: username,
      phoneNumber: phoneNumber,
      aadharNumber: aadharNumber,
      category: category,
      YOE: YOE,
      otherSkills: otherSkills,
      currentLocation: currentLocation,
      availability: availability,
      messageForRecruiter: messageForRecruiter,
    };
    console.log("printing from manager", user);
    try {
      const newUser = await this.user.create(user);
      return newUser;
    } catch (err) {
      console.log("ERROR IN USER MANAGER");
      throw err;
    }
  }
}

module.exports = UserManager;
