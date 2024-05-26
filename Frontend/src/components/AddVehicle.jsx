import React, { useState } from "react";
import axios from "axios";

const AddVehicle = () => {
  const [formData, setFormData] = useState({
    vehicleNumber: "",
    vehicleType: "",
    PUC_certificate: "",
    insurance_certificate: "",
  });
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${apiUrl}/vehicles`, formData)
      .then((response) => {
        alert("Vehicle added successfully");
        setFormData({
          vehicleNumber: "",
          vehicleType: "",
          PUC_certificate: "",
          insurance_certificate: "",
        });
      })
      .catch((error) => {
        alert("Error adding vehicle: " + error.message);
      });
  };

  return (
    <div>
      <h1>Add Vehicle</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Vehicle Number:
          <input
            type="text"
            name="vehicleNumber"
            value={formData.vehicleNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Vehicle Type:
          <input
            type="text"
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          PUC Certificate URL:
          <input
            type="text"
            name="PUC_certificate"
            value={formData.PUC_certificate}
            onChange={handleChange}
          />
        </label>
        <label>
          Insurance Certificate URL:
          <input
            type="text"
            name="insurance_certificate"
            value={formData.insurance_certificate}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Vehicle</button>
      </form>
    </div>
  );
};

export default AddVehicle;
