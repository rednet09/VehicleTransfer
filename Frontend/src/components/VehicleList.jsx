import React, { useState, useEffect } from "react";
import axios from "axios";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios
      .get("/vehicles")
      .then((response) => setVehicles(response.data))
      .catch((error) => console.error("Error fetching vehicles:", error));
  }, []);

  return (
    <div>
      <h1>Vehicles</h1>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.vehicleNumber}>{vehicle.vehicleType}</li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
