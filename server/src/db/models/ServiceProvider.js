module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define(
    'ServiceProvider',
    {
      company_name: DataTypes.STRING,
      description: DataTypes.STRING,
      cpf_cnpj: DataTypes.STRING,
      permission: DataTypes.INTEGER
    },
    {
      freezeTableName: true
    }
  );

  table.associate = function (models) {
    models.ServiceProvider.hasMany(models.Product, { foreignKey: 'serviceprovider_id' });
    models.ServiceProvider.hasMany(models.WorkShedule, { foreignKey: 'serviceprovider_id' });

    models.ServiceProvider.hasOne(models.User, { foreignKey: 'createByUser' });
  };

  return table;
};
