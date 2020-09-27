
import { login } from './../controllers/authController';
import { Router } from 'express';


class AuthRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/login', login)
    }
}

 const authRoutes = new AuthRoutes();
 export default authRoutes.router;