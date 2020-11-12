const express = require("express");
const router = express.Router();
const controller = require("../controller/bandsController");

router.get("/", controller.getAll);
router.post("/", controller.postBands);

module.exports = router;