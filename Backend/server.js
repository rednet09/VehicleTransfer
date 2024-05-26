const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");

const driverRoutes = require("./routes/driverRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");
const transferRoutes = require("./routes/transferRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/drivers", driverRoutes);
app.use("/vehicles", vehicleRoutes);
app.use("/transfers", transferRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
