module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define(
    'State',
    {
      initials: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      freezeTableName: true
    }
  );

  table.associate = function (models) {
    models.State.hasMany(models.City, { foreignKey: 'state_id' });

    models.State.hasMany(models.Address, { foreignKey: 'state_id' });
  };

  return table;
};
