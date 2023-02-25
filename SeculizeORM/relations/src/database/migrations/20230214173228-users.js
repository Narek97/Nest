/home/beeweb/Desktop/SuitCX/suitecx-api'use strict';
const {DataType} = require('sequelize-typescript');

module.exports = {
	async up(queryInterface, Sequelize) {
		
		return queryInterface.createTable('users', {
			id: {
				type: DataType.INTEGER,
				autoIncrement: true,
				unique: true,
				primaryKey: true,
			},
			email: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false,
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			banned: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
			bannedReason: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			createdAt: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('now'),
			},
			updatedAt: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('now'),
			},
		})
		
	},
	
	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable('users');
	}
};
