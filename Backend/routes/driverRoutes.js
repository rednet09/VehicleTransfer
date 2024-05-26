const express = require("express");
const router = express.Router();
const driverController = require("../controllers/driverController");

router.get("/", driverController.getAllDrivers);
router.post("/", driverController.createDriver);

module.exports = router;
