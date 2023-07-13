const { body, validationResult } = require('express-validator');

function validate() {
  // console.log('flag');
  try {
    return [
      body("name")
        .isString()
        .isLength({ min: 3, max: 20 })
        .withMessage('Please enter a valid  name'),

      body("phone")
        .isNumeric()
        .isLength({max: 20 })
        .withMessage('Please enter a valid phone'),

      body("email")
        .isEmail()
        .withMessage('Please enter a valid email'),

      body("password"),
        

      (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }
        next();
      }
    ]
  } catch (error) {
    console.log(error);
  }
}

module.exports = { validate };