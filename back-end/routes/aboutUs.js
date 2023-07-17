var express = require("express");
var router = express.Router();
const upload = require("../middleware/uploadFiles");
const {
  update,
  create,
  deleteM,
  showMember,
  showMembers,
} = require("../controller/aboutUsController");
const { validate } = require("../validation/aboutUsValid");

router.post(
  "/create",
  upload.single('member_img'),
  validate(),
  create
);

router.put(
  "/update/:id",
  upload.single('member_img'),
  validate(),
  update
);

router.delete("/delete/:id", validate(), deleteM);

router.get("/getOne/:id", validate(), showMember);

router.get("/getAll", validate(), showMembers);


module.exports = router;


// upload.fields([
//   { name: "image", maxCount: 1 },
//   { name: "videos", maxCount: 1 },
// ]),