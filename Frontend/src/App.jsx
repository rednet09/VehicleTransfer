import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DriverList from "./components/DriverList";
import VehicleList from "./components/VehicleList";
import Transfer from "./components/Transfer";
import TransferHistory from "./components/TransferHistory";
import AddDriver from "./components/AddDriver";
import AddVehicle from "./components/AddVehicle";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/drivers" component={DriverList} />
        <Route path="/add-driver" component={AddDriver} />
        <Route path="/vehicles" component={VehicleList} />
        <Route path="/add-vehicle" component={AddVehicle} />
        <Route path="/transfer" component={Transfer} />
        <Route path="/transfer-history" component={TransferHistory} />
      </Switch>
    </Router>
  );
}

export default App;
