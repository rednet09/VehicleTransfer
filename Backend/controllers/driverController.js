const { Driver } = require("../models");

exports.getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.findAll();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createDriver = async (req, res) => {
  try {
    const { name, phone_number, profile_photo } = req.body;
    const newDriver = await Driver.create({
      name,
      phone_number,
      profile_photo,
    });
    res.status(201).json(newDriver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
