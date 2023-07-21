const bcrypt = require("bcrypt");
const { getUser } = require("../services/loginServices");

async function login(req, res, next) {
  try {
    const result = await getUser(req.body.email, req.body.password);
    if (!(await bcrypt.compare(req.body.password, result[0].password))) {
      return res.status(400).json({errors:[{ msg: "password isn't correct" }]});
    }
    result[0].image = "http://" + req.hostname + ":5000/" + result[0].image;
    delete result[0].password;
    res.json(result);
  } catch (error) {
    return res
      .status(400)
      .json({errors:[{
        msg: "The email address or mobile number you entered isn't connected to an account.",
      }]});
  }
}

module.exports = { login };
