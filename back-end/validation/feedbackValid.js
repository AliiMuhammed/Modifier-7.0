const { body, validationResult } = require("express-validator");
const upload= require('../middleware/uploadFiles') 

  function validate() {
    return [
      body("comment")
        .isString()
        .withMessage("Please enter a valid comment"),
      body("rating").isNumeric()
        .isLength({ max: 5 })
        .withMessage("max is 5"),
      body("services"),
      (req, res, next) => {
        const errors = validationResult(req);
        req.validationErrors = () => errors.array();
        next();
      },
    ];
  }


module.exports = {validate};