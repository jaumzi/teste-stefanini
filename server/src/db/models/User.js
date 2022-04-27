module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      permission: DataTypes.INTEGER,
      cpf_cnpj: DataTypes.STRING,
      birthday: DataTypes.DATE
    },
    {
      freezeTableName: true
    }
  );

  table.associate = function (models) {
    models.User.hasMany(models.Address, { foreignKey: 'user_id' });
    models.User.hasMany(models.ServiceProvider, { foreignKey: 'createByUser' });
  };

  return table;
};
