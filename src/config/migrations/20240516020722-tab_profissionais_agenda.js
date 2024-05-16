'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tab_profissionais_agenda', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profissional_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'tab_profissionais', 
          key: 'id'
        }
      },
      semana: {
        allowNull: false,
        type: Sequelize.STRING
      },
      inicio_hora: {
        allowNull: false,
        type: Sequelize.TIME
      },
      fim_hora: {
        allowNull: false,
        type: Sequelize.TIME
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tab_profissionais_agenda');
  }
};
