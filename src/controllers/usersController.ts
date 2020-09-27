import { Request, Response } from 'express';
import { pool } from '../database';

// ==================================================//
// ============== CRUD USERS ========================//
// ==================================================//

export async function getUsers(req: Request, res: Response) {
	try {
		const [ rows ] = await pool.query('SELECT * FROM users');
		return res.json(rows);
	} catch (e) {
		return res.json({ error: e });
	}
}

export async function createUser(req: Request, res: Response) {
	const newUser = req.body;
	try {
		await pool.query('INSERT INTO user SET ?', newUser);
		return res.json({ message: 'User Created!' });
	} catch (e) {
		return res.json({ error: e });
	}
}

export async function deleteUser(req: Request, res: Response) {
	const id = req.params.id;
	try {
		const [ rows ] = await pool.query('DELETE FROM users WHERE id = ?', [ id ]);
		return res.json({ message: 'User Deleted!', resultado: rows });
	} catch (e) {
		return res.json({ error: e });
	}
}

export async function updateUser(req: Request, res: Response) {
	const updateUser = req.body;
	const id = req.params.id;
	try {
		const [ rows ] = await pool.query('UPDATE users SET ? WHERE id = ?', [ updateUser, id ]);
		return res.json({ message: 'User Updated!', resultado: rows });
	} catch (e) {
		return res.status(403).send({ error: e });
	}
}
