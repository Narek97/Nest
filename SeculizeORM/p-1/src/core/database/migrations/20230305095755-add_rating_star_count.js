'use strict';
const { DataType } = require('sequelize-typescript');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('rating', 'star', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
    return queryInterface.addColumn('rating', 'count', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('rating', 'star');
    return queryInterface.removeColumn('rating', 'count');
  },
};
