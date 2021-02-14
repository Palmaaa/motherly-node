import { getRepository, Repository } from "typeorm";
import User from "../models/User";
import IUserRepository from "./IUserRepository";

class UserRepository implements IUserRepository {
    private ormRepository: Repository<User>;
    
    constructor() {
        this.ormRepository = getRepository(User);
    }
    
    public async index() {
        const users = await this.ormRepository.find();

        return users;
    }
}

export default UserRepository;