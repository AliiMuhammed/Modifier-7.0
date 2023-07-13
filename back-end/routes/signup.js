var express = require('express');
var router = express.Router();
const {validate} = require('../validation/signupValidation');
const {postSignup} = require('../controller/signupController');


router.post('/', validate(), postSignup);

module.exports = router;
