module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define(
    'WorkShedule',
    {
      day_of_week: DataTypes.DECIMAL,
      end: DataTypes.DATE,
      start: DataTypes.DATE,
    },
    {
      freezeTableName: true
    }
  );

  table.associate = function (models) {
    models.WorkShedule.hasOne(models.ServiceProvider, { foreignKey: 'serviceprovider_id' });
  };

  return table;
};
