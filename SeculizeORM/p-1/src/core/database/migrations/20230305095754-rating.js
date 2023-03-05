'use strict';
const { DataType } = require('sequelize-typescript');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('rating', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      movieId: {
        type: DataType.INTEGER,
        allowNull: false,
        references: {
          model: 'movies',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('rating');
  },
};
