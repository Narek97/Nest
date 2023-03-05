'use strict';
const { DataType } = require('sequelize-typescript');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('rating', 'count');
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn('rating', 'count', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },
};
