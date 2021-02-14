class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async createUser(req, res, next) {
    const {
      username,
      phoneNumber,
      aadharNumber,
      category,
      YOE,
      otherSkills,
      currentLocation,
      availibility,
      messageForRecruiter,
    } = req.body;
    // console.log("Reached controller");
    try {
      const user = await this.userService.createUser(
        username,
        phoneNumber,
        aadharNumber,
        category,
        YOE,
        otherSkills,
        currentLocation,
        availibility,
        messageForRecruiter
      );
      return res.status(201).json({
        data: user,
      });
    } catch (err) {
      return res.status(400).send(err);
    }
  }
}

module.exports = UserController;
