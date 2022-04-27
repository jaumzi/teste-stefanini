module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define(
    'City',
    {
      description: DataTypes.STRING,
    },
    {
      freezeTableName: true
    }
  );

  table.associate = function (models) {
    models.City.hasOne(models.State, { foreignKey: 'state_id' });
    models.City.hasMany(models.Neighborhood, { foreignKey: 'city_id' });

    models.City.hasMany(models.Address, { foreignKey: 'city_id' });
  };

  return table;
};
