const express = require("express");
const router = express.Router();
const controller = require("../controller/bandsController");

router.get("/", controller.getAll);
router.post("/", controller.postBands);
router.delete("/:id", controller.deleteBand);
router.put("/:id", controller.putBand);

module.exports = router;