'use strict';
const { DataType } = require('sequelize-typescript');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('genres', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('genres');
  },
};
