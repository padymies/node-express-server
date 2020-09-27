import { getStatus } from '../controllers/statusController';
import { Router } from 'express';


class StatusRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', getStatus);
    }
}

 const statusRoutes = new StatusRoutes();
 export default statusRoutes.router;