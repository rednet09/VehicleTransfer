import React, { useState } from "react";
import axios from "axios";

const AddDriver = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    profile_photo: "",
  });
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${apiUrl}/drivers`, formData)
      .then((response) => {
        alert("Driver added successfully");
        setFormData({ name: "", phone_number: "", profile_photo: "" });
      })
      .catch((error) => {
        alert("Error adding driver: " + error.message);
      });
  };

  return (
    <div>
      <h1>Add Driver</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Profile Photo URL:
          <input
            type="text"
            name="profile_photo"
            value={formData.profile_photo}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Driver</button>
      </form>
    </div>
  );
};

export default AddDriver;
