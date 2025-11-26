import { User, UserType } from "../entities/user";
import { UserNotFound } from "../errors/user/userNotFound";
import { userHelper } from "../helpers/userHelper";
import { ExistingEmailError } from "../errors/user/existingEmailError";
import { IncorrectPasswordOrMailError } from "../errors/user/incorrectPasswordOrMailError";


export class userService {

    constructor(private readonly helper: userHelper) { }

    async findUserById(id: string): Promise<User> {

        const user = await this.helper.findUserById(id)

        if (!user) {
            throw new UserNotFound(id)
        }

        return user

    }

    async findUserByEmail(email: string, password: string): Promise<User> {

        const user = await this.helper.findUserByEmail(email)

        if (!user) {
            throw new IncorrectPasswordOrMailError()
        }

        if (password !== user.password) {
            throw new IncorrectPasswordOrMailError()
        }

        return user

    }

    async createUser(name: string, surname: string, email: string, password: string, type: UserType): Promise<User> {

        const existing = await this.helper.findUserByEmail(email)

        if (existing) {
            throw new ExistingEmailError()
        }

        const user = User.create(name, surname, email, password, type)

        return this.helper.saveUser(user)
    }

    async updateUser(id: string, name?: string, surname?: string, email?: string, password?: string, type?: UserType): Promise<User> {
        const existing = await this.findUserById(id)

        const updatedUser = existing.update({ name, surname, email, password, type })

        return this.helper.saveUser(updatedUser)
    }

    async deleteUser(id: string): Promise<void> {
        await this.findUserById(id)
        await this.helper.deleteUser(id)
    }

}