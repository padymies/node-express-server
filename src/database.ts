const mysql = require('mysql2/promise');

export const pool = mysql.createPool({
	// db configuration
	host: 'localhost',
	user: 'db_user',
	password: 'db_password',
	database: 'db_name',
	connectionLimit: 10
});

export const secret = 'worldisfullofdevelopers';
