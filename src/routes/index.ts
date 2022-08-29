import * as express from 'express';
import * as http from 'http';
import * as jwtConfig from '../config/middleware/jwtAuth';
import AuthRouter from './AuthRouter';
import UserRouter from './UserRouter';

export function init(app: express.Application): void {
    const router: express.Router = express.Router();

    app.use('/v1/users', jwtConfig.isAuthenticated, UserRouter);

    app.use('/auth', AuthRouter);

    app.use((req, res) => {
        res.status(404).send(http.STATUS_CODES[404]);
    });
    app.use(router);
}
