import {
	getAnotherEntities,
	getAnotherEntity,
	updateAnotherEntity,
	deleteAnotherEntity,
	createAnotherEntities
} from '../controllers/anotherEntityController';
import { Router } from 'express';

class AnotherEntitiesRoutes {
	public router: Router = Router();

	constructor() {
		this.config();
	}

	config(): void {
		this.router
			.get('/anotherentities', getAnotherEntities)
			.get('/anotherentities/:id', getAnotherEntity)
			.post('/anotherentities', createAnotherEntities)
			.put('/anotherentities/:id', updateAnotherEntity)
			.delete('/anotherentities/:id', deleteAnotherEntity);
	}
}

const anotherEntitiesRoutes = new AnotherEntitiesRoutes();
export default anotherEntitiesRoutes.router;
