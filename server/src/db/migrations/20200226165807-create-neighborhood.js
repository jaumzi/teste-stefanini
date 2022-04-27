'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // return queryInterface.createTable('Neighborhood', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   city_id: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'City',
    //       key: 'id',
    //     }
    //   },
    //   description: {
    //     allowNull: false,
    //     type: Sequelize.STRING
    //   },
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   deletedAt: {
    //     allowNull: true,
    //     type: Sequelize.DATE
    //   }
    // });
    return;
  },

  down: (queryInterface, Sequelize) => {
    // return queryInterface.dropTable('Neighborhood');
    return;
  }
};
