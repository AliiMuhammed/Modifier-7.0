const bcrypt = require("bcrypt");
var passwordValidator = require("password-validator");
var schema = new passwordValidator();
const { getEmail, insertUser } = require("../services/signupServices");

schema
  .is()
  .min(8)
  .is()
  .max(255)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits(2)
  .has()
  .not()
  .spaces();

async function postSignup(req, res) {
  try {
    if (!(await getEmail(req.body.email))) {
      const flag = await schema.validate(req.body.password);
      if (!flag) {
        return res
          .status(400)
          .json({
            msg: "password should contain : 1 lowercase, 1 uppercase, 2 digits, no spaces, length of 8",
          });
      }
      let obj = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        phone: req.body.phone
      };
      if(req.body.type)
      {
        obj: req.body.type
      }
      await insertUser(obj);
      res.end();
    } else {
      res.status(400).json({ errors: [{ msg: "Email already exists!" }] });    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = { postSignup };
