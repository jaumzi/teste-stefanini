module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define(
    'Address',
    {
      description: DataTypes.STRING,
      cep: DataTypes.STRING,
    },
    {
      freezeTableName: true
    }
  );

  table.associate = function (models) {
    models.Address.hasOne(models.User, { foreignKey: 'user_id' });

    models.Address.hasOne(models.State, { foreignKey: 'state_id' });
    models.Address.hasOne(models.City, { foreignKey: 'city_id' });
    models.Address.hasOne(models.Neighborhood, { foreignKey: 'neighborhood_id' });
  };

  return table;
};
