import { UserRepository } from "../repository/user_repository.js";

class UserService{
    constructor() {
        this.UserRepository = new UserRepository();
    }

    async signUp (data){
        try {
            const user = this.UserRepository.create(data)
            return user;
        } catch (error) {
            throw error;
        }
    }

    async getUserByEmail(email) {
        try {
            const user = await this.UserRepository.findBy({ email })
            return user;
        } catch (error) {
            throw error;
        }
    }
    async signin(data) {
        try {
            const user = await this.getUserByEmail(data.email);
            if (!user) {
                throw {
                    message: 'no user found'
                };
            }
            if (!user.comparePassword(data.password)) {
                throw {
                    message: 'incorrect password',
                };
            }
            const token = user.genJWT();
            return token;
        } catch (error) {
            throw error;
        }

    }
}

export {
    UserService
}