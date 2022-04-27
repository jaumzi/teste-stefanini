module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define(
    'Product',
    {
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
      quantity: DataTypes.FLOAT,
    },
    {
      freezeTableName: true
    }
  );

  table.associate = function (models) {
    models.Product.hasOne(models.ServiceProvider, { foreignKey: 'serviceprovider_id' });
  };

  return table;
};
