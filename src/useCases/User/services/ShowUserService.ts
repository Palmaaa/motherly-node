import IUserRepository from "../repositories/IUserRepository";

class ShowUserService {
    private userRepository: IUserRepository;
    
    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }
    
    public async execute() {
        const users = await this.userRepository.index();

        return users;
    }
}

export default ShowUserService;