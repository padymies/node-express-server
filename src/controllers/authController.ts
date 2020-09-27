import { Request, Response } from 'express';
import { pool } from '../database';
import jwt from 'jsonwebtoken';
import { secret } from '../database';

var md5 = require('md5-jkmyers');

// ==================================================//
// ============== AUTH LOGIN ========================//
// ==================================================//

export async function login(req: Request, res: Response) {
	try {
		const { username, password } = req.body;
		const [ rows ] = await pool.query('SELECT * FROM users WHERE username = ?', [ username ]);

		if (rows.length > 0) {
			return authenticate(res, rows[0], password);
		} else {
			return res.status(403).send({
				success: false,
				message: 'Authentication failed!',
				error: 'User not found!!'
			});
		}
	} catch (err) {
		return res.json({
			success: false,
			message: 'Db Connect Failed!',
			error: err
		});
	}
}

export function authenticate(res: Response, row: any, pass: any): any {
	if (row.password === md5(pass)) {
		let token = jwt.sign({ username: row.username }, secret, {
			expiresIn: '10m'
		});
		console.log(token);

		return res.json({
			success: true,
			message: 'Authentication successful!',
			access_token: token,
			expiresIn: '10m'
		});
	} else {
		return res.status(403).send({
			success: false,
			message: 'Authentication failed!',
			error: 'Incorrect password!!'
		});
	}
}
