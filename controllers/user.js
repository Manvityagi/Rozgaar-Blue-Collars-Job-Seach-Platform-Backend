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
      availability,
      messageForRecruiter,
    } = req.body;

    console.log("Reached controller");
    console.log(req.body);
    try {
      const user = await this.userService.createUser(
        username,
        phoneNumber,
        aadharNumber,
        category,
        YOE,
        otherSkills,
        currentLocation,
        availability,
        messageForRecruiter
      );
      return res.status(201).json({
        data: user,
      });
    } catch (err) {
      console.log("Error being sent from backend", err);
      return res.status(400).send(err);
    }
  }
}

module.exports = UserController;
