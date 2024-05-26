module.exports = (sequelize, DataTypes) => {
  const Transfer = sequelize.define(
    "Transfer",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      vehicleNumber: {
        type: DataTypes.STRING,
        references: {
          model: "Vehicles",
          key: "vehicleNumber",
        },
      },
      from_driver_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Drivers",
          key: "id",
        },
      },
      to_driver_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Drivers",
          key: "id",
        },
      },
      transfer_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {}
  );
  return Transfer;
};
