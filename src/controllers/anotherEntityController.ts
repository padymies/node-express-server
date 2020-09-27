import { Request, Response } from 'express';
import { pool } from '../database';

// ==================================================//
// ============ CRUD ANOTHER ENTITIES ===============//
// ==================================================//

export async function getAnotherEntities(req: Request, res: Response) {
	try {
		const [ rows ] = await pool.query('SELECT * FROM another_entities');
		return res.json(rows);
	} catch (err) {
		return res.json({ error: err });
	}
}
export async function getAnotherEntity(req: Request, res: Response) {
	try {
		const id = req.params.id;
		const [ rows ] = await pool.query('SELECT * FROM another_entities WHERE id=?', [ id ]);
		return res.json(rows);
	} catch (err) {
		return res.json({ error: err });
	}
}

export async function createAnotherEntities(req: Request, res: Response) {
	const another_entities = req.body;
	try {
		const result = await pool.query('INSERT INTO another_entities SET ?', [ another_entities ]);

		return res.json(result);
	} catch (err) {
		return res.json({ error: err });
	}
}

export async function deleteAnotherEntity(req: Request, res: Response) {
	const id = req.params.id;
	try {
		const result = await pool.query('DELETE FROM another_entities WHERE id = ?', [ id ]);
		return res.json({ message: 'Another Entity Deleted!', result: result });
	} catch (err) {
		return res.json({ error: err });
	}
}

export async function updateAnotherEntity(req: Request, res: Response) {
	const anotherEntity = req.body;
	const id = req.params.id;
	try {
		const result = await pool.query('UPDATE another_entities SET ? WHERE id = ?', [
			anotherEntity,
			id
		]);
		return res.json({ message: 'Another Entity Updated!', result: result });
	} catch (err) {
		res.json(err);
	}
}
