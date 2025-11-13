import { User } from "../entities/user";
import { UserNotFound } from "../errors/user/userNotFound";
import { userHelper } from "../helpers/userHelper";


export class userService {

    constructor ( private readonly helper: userHelper ) {}

    async findUserById (id: string): Promise<User> {

        const user = await this.helper.findUserById(id)

        if (!user) {
            throw new UserNotFound(`The user with id ${id} can't be reach`)
        }

        return user

    }

}