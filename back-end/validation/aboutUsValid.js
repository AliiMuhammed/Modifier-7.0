const { body, validationResult } = require("express-validator");
const upload= require('../middleware/uploadFiles') 

  function validate() {
    return [
      body("member_Name")
        .isString()
        .withMessage("Please enter a valid name"),
      body("linkedin").isURL().withMessage("Please enter a valid linkedin URL"),
      body("gitHub").isURL().withMessage("Please enter a valid gitHub URL"),
      body("member_Role"),
      (req, res, next) => {
        const errors = validationResult(req);
        req.validationErrors = () => errors.array();
        next();
      },
    ];
  }


module.exports = {validate};