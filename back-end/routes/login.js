var express = require('express');
var router = express.Router();
const {login} = require('../controller/loginController');
const {validate} = require('../validation/loginValidation');

router.post('/', validate(), login);

module.exports = router;
