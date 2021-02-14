import { Request, Response } from 'express'
import { getRepository } from 'typeorm';
import User from '../../../useCases/User/models/User';

import UserRepository from '../../../useCases/User/repositories/UserRepository';
import ShowUserService from '../../../useCases/User/services/ShowUserService';

class UsersController {
    public async index(request: Request, response: Response) {
        const userRepository = new UserRepository();
        const showUserService = new ShowUserService(userRepository);

        const users = await showUserService.execute();

        return response.json(users);
    }
}

export default UsersController;