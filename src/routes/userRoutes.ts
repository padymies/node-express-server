import { getUsers, createUser, deleteUser, updateUser } from '../controllers/usersController';
import { Router } from 'express';


class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/users', getUsers)
                   .post('/users', createUser)
                   .put('/users/:id', updateUser)
                   .delete('/users/:id', deleteUser);
    }
}

 const indexRoutes = new IndexRoutes();
 export default indexRoutes.router;