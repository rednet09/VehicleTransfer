import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import Routes and change BrowserRouter to Router
import Home from "./components/Home";
import AddDriver from "./components/AddDriver";
import AddVehicle from "./components/AddVehicle";
import DriverList from "./components/DriverList";
import VehicleList from "./components/VehicleList";
import Transfer from "./components/Transfer";
import TransferHistory from "./components/TransferHistory";

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex items-center">
                <Link to="/" className="text-white text-lg font-semibold">
                  Transport Management
                </Link>
              </div>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/" className="text-white hover:text-gray-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/add-driver"
                    className="text-white hover:text-gray-300"
                  >
                    Add Driver
                  </Link>
                </li>
                <li>
                  <Link
                    to="/add-vehicle"
                    className="text-white hover:text-gray-300"
                  >
                    Add Vehicle
                  </Link>
                </li>
                <li>
                  <Link
                    to="/drivers"
                    className="text-white hover:text-gray-300"
                  >
                    Drivers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/vehicles"
                    className="text-white hover:text-gray-300"
                  >
                    Vehicles
                  </Link>
                </li>
                <li>
                  <Link
                    to="/transfer"
                    className="text-white hover:text-gray-300"
                  >
                    Transfer Vehicle
                  </Link>
                </li>
                <li>
                  <Link
                    to="/transfer-history"
                    className="text-white hover:text-gray-300"
                  >
                    Transfer History
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          {" "}
          {/* Wrap your Routes */}
          <Route path="/" element={<Home />} />{" "}
          {/* Use element prop to specify component */}
          <Route path="/add-driver" element={<AddDriver />} />
          <Route path="/add-vehicle" element={<AddVehicle />} />
          <Route path="/drivers" element={<DriverList />} />
          <Route path="/vehicles" element={<VehicleList />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/transfer-history" element={<TransferHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
