import User from "../models/User";

interface IUserRepository {
    index(): Promise<User[]>;
}

export default IUserRepository;