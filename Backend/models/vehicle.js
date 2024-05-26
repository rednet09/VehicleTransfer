module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define(
    "Vehicle",
    {
      vehicleNumber: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      vehicleType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PUC_certificate: {
        type: DataTypes.STRING,
      },
      insurance_certificate: {
        type: DataTypes.STRING,
      },
    },
    {}
  );
  return Vehicle;
};
