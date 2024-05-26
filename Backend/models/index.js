const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/config.json");
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

const Driver = require("./driver")(sequelize, DataTypes);
const Vehicle = require("./vehicle")(sequelize, DataTypes);
const Transfer = require("./transfer")(sequelize, DataTypes);

Driver.hasMany(Transfer, { foreignKey: "from_driver_id" });
Driver.hasMany(Transfer, { foreignKey: "to_driver_id" });
Vehicle.hasMany(Transfer, { foreignKey: "vehicleNumber" });

module.exports = { sequelize, Driver, Vehicle, Transfer };
