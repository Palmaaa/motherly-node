import { Router } from "express";

import UsersController from "../controller";


const usersController = new UsersController();

const userRouter = Router();

userRouter.get('/users', usersController.index);

export default userRouter;