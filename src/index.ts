import express from 'express';
import { Application } from 'express-serve-static-core';
import cors from 'cors';
import morgan from 'morgan';

import indexRoutes from './routes/anotherEntitiesRoutes';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import statusRoutes from './routes/statusRoutes';

class Server {
	public app: Application;

	constructor() {
		this.app = express();
		this.config();
		this.routes();
	}

	config(): void {
		this.app.set('port', process.env.PORT || 3000);
		this.app.use(cors());
		this.app.use(morgan('dev'));
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(express.json());
	}

	routes(): void {
		this.app.use(statusRoutes).use(indexRoutes).use(authRoutes).use(userRoutes);
	}

	start(): void {
		this.app.listen(this.app.get('port'), () => {
			console.log('Server on port: ', this.app.get('port'));
		});
	}
}

const server = new Server();
server.start();

export const app = server.app;
