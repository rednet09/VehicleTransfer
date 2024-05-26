import { useState, useEffect } from "react";
import axios from "axios";

const Transfer = () => {
  const [formData, setFormData] = useState({
    vehicleNumber: "",
    from_driver_id: "",
    to_driver_id: "",
  });
  const apiUrl = process.env.REACT_APP_API_URL;
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/drivers`)
      .then((response) => setDrivers(response.data))
      .catch((error) => console.error("Error fetching drivers:", error));
    axios
      .get(`${apiUrl}/vehicles`)
      .then((response) => setVehicles(response.data))
      .catch((error) => console.error("Error fetching vehicles:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${apiUrl}/transfers`, formData)
      .then((response) => {
        alert("Vehicle transferred successfully");
        setFormData({
          vehicleNumber: "",
          from_driver_id: "",
          to_driver_id: "",
        });
      })
      .catch((error) => {
        alert("Error transferring vehicle: " + error.message);
      });
  };

  return (
    <div>
      <h1>Transfer Vehicle</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Vehicle:
          <select name="vehicleNumber" onChange={handleChange}>
            {vehicles.map((vehicle) => (
              <option key={vehicle.vehicleNumber} value={vehicle.vehicleNumber}>
                {vehicle.vehicleType}
              </option>
            ))}
          </select>
        </label>
        <label>
          From Driver:
          <select name="from_driver_id" onChange={handleChange}>
            {drivers?.map((driver) => (
              <option key={driver.id} value={driver.id}>
                {driver.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          To Driver:
          <select name="to_driver_id" onChange={handleChange}>
            {drivers?.map((driver) => (
              <option key={driver.id} value={driver.id}>
                {driver.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
};

export default Transfer;
