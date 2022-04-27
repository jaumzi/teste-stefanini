module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define(
    'Neighborhood',
    {
      initials: DataTypes.STRING,
    },
    {
      freezeTableName: true
    }
  );

  table.associate = function (models) {
    models.Neighborhood.hasOne(models.City, { foreignKey: 'city_id' });

    models.Neighborhood.hasMany(models.Address, { foreignKey: 'neighborhood_id' });
  };

  return table;
};
