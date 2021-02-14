import { Router } from 'express';

import userRouter from './User/routes';

const routes = Router();

routes.use('/', userRouter);

export default routes;