'use strict';

const { Encrypt } = require("../../util/Cryptography");
const EnumPermission = require("../../util/EnumPermission");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();

    return queryInterface.sequelize.transaction(async (t) => {

      const password = await Encrypt('123123');

      return Promise.all([
        queryInterface.bulkInsert(
          'User',
          [
            {
              name: 'Administrador',
              email: 'admin@admin.com',
              password: password,
              cpf: '123.456.789-10',
              birthday: new Date(1997, 5, 21),
              permission: EnumPermission.ADMIN,
              createdAt: now,
              updatedAt: now
            },
            {
              name: 'Fulano da Silva',
              email: 'basico@basico.com',
              password: password,
              cpf: '123.456.789-11',
              birthday: new Date(1997, 5, 22),
              permission: EnumPermission.BASIC,
              createdAt: now,
              updatedAt: now
            }
          ],
          {}
        ),

      ]);
    });
  },

  down: (queryInterface, Sequelize) => {}
};
