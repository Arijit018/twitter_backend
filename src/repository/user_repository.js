import {CrudRepository} from "./crud_repository.js";
import {User} from '../model/user.js';
class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async findBy(data){
        try {
            const response= await User.findOne(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export { UserRepository }