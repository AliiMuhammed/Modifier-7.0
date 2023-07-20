var express = require("express");
var router = express.Router();
const upload = require("../middleware/uploadFiles");
const {
  update,
  create,
  deleteS,
  showService,
  showServices,
} = require("../controller/servicesController");
const { validate } = require("../validation/servicesValid");

router.post(
  "/create",
  upload.fields([
    { name: "img", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  validate(),
  create
);

router.put(
  "/update/:id",
  upload.fields([
    { name: "img", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  validate(),
  update
);

router.delete("/delete/:id", validate(), deleteS);

router.get("/getOne/:id", validate(), showService);

router.get("/getAll", validate(), showServices);


module.exports = router;
