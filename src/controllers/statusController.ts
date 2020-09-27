import { Request, Response } from 'express';
import { pool } from '../database';

export async function getStatus(req: Request, res: Response) {
	const conn = await pool.getConnection();
	if (conn) {
		return res.json({ connectionDB: 'success', status: 'Ok' });
	}
}
