import React, { useState, useEffect } from "react";
import axios from "axios";

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    axios
      .get("/drivers")
      .then((response) => setDrivers(response.data))
      .catch((error) => console.error("Error fetching drivers:", error));
  }, []);

  return (
    <div>
      <h1>Drivers</h1>
      <ul>
        {drivers.map((driver) => (
          <li key={driver.id}>{driver.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DriverList;
