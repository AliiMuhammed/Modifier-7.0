var express = require("express");
var router = express.Router();
const upload = require("../middleware/uploadFiles");
const {
  update,
  deleteU,
  showUser,
  showUsers,
  updateImage
} = require("../controller/userController");
const { validate } = require("../validation/userValidation");


router.put(
  "/update/:id",
  upload.single('image'),
  validate(),
  update
);

router.put(
  "/updateImage/:id",
  upload.single('image'),
  updateImage
);

router.delete("/deleteUser/:id",  deleteU);

router.get("/getUser/:id", showUser);

router.get("/getUsers", showUsers);

module.exports = router;
