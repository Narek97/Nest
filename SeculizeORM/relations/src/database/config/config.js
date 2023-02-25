module.exports = {
	development: {
		dialect: 'postgres',
		host: 'localhost',
		port: 5432,
		username: 'postgres',
		password: 'root',
		database: 'postgres_db',
	},
	test: {
		dialect: 'postgres',
		host: 'localhost',
		port: 5432,
		username: 'postgres',
		password: 'root',
		database: 'test',
	},
	production: {
		dialect: 'postgres',
		host: 'localhost',
		port: 5432,
		username: 'postgres',
		password: 'root',
		database: 'prod',
	},
};
