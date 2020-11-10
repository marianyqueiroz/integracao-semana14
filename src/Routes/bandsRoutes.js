const express = require("express");
const router = express.Router();
const controller = require("../controller/bandsController");

router.get("/bands", controller.getAll);
router.post("/bands", controller.postBands);

module.exports = router;