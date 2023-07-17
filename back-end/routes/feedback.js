var express = require("express");
var router = express.Router();
const upload = require("../middleware/uploadFiles");
const {
  create,
  deleteFeed,
  showFeeds,
} = require("../controller/feedbackController");
const { validate } = require("../validation/feedbackValid");

router.post(
  "/create/:user_id",
  validate(),
  create
);

router.delete("/delete/:id", validate(), deleteFeed);

router.get("/getFeedbacks", validate(), showFeeds);


module.exports = router;


// upload.fields([
//   { name: "image", maxCount: 1 },
//   { name: "videos", maxCount: 1 },
// ]),