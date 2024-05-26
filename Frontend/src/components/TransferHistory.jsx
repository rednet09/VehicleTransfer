import React, { useState, useEffect } from "react";
import axios from "axios";

const TransferHistory = () => {
  const [transfers, setTransfers] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}/transfers`)
      .then((response) => setTransfers(response.data))
      .catch((error) =>
        console.error("Error fetching transfer history:", error)
      );
  }, []);

  return (
    <div>
      <h1>Transfer History</h1>
      <ul>
        {transfers.map((transfer) => (
          <li key={transfer.id}>
            Vehicle {transfer.vehicleNumber} transferred from Driver{" "}
            {transfer.from_driver_id} to Driver {transfer.to_driver_id} on{" "}
            {transfer.transfer_date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransferHistory;
