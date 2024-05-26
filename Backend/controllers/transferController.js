const { Transfer } = require("../models");

exports.getAllTransfers = async (req, res) => {
  try {
    const transfers = await Transfer.findAll();
    res.json(transfers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTransfer = async (req, res) => {
  try {
    const { vehicleNumber, from_driver_id, to_driver_id } = req.body;
    const newTransfer = await Transfer.create({
      vehicleNumber,
      from_driver_id,
      to_driver_id,
    });
    res.status(201).json(newTransfer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
