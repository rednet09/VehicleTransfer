const { Vehicle } = require("../models");

exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createVehicle = async (req, res) => {
  try {
    const {
      vehicleNumber,
      vehicleType,
      PUC_certificate,
      insurance_certificate,
    } = req.body;
    const newVehicle = await Vehicle.create({
      vehicleNumber,
      vehicleType,
      PUC_certificate,
      insurance_certificate,
    });
    res.status(201).json(newVehicle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
