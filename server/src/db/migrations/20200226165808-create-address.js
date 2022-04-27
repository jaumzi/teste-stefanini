'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User',
          key: 'id',
        }
      },
      state_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'State',
          key: 'id',
        }
      },
      city_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'City',
          key: 'id',
        }
      },
      neighborhood_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Neighborhood',
          key: 'id',
        }
      },
      number: {
        allowNull: false,
        type: Sequelize.STRING
      },
      complement: {
        allowNull: false,
        type: Sequelize.STRING
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cep: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Address');
  }
};
