var express = require("express");
var router = express.Router();
const upload = require("../middleware/uploadFiles");
const {
  create,
  deleteM,
  showmessages,
} = require("../controller/contactUsController");
const { validate } = require("../validation/contactUsValid");

router.post(
  "/create",
  validate(),
  create
);

router.delete("/delete/:id", validate(), deleteM);

router.get("/getMessages", validate(), showmessages);


module.exports = router;
