import { User, UserType } from "../entities/user";
import { UserNotFound } from "../errors/user/userNotFound";
import { userHelper } from "../helpers/userHelper";
import { ExistingEmailError } from "../errors/user/existingEmailError";
import { UnauthorizedUserError } from "../errors/user/unauthorizedUserError";


export class userService {

    constructor ( private readonly helper: userHelper ) {}

    async findUserById (id: string): Promise<User> {

        const user = await this.helper.findUserById(id)

        if (!user) {
            throw new UserNotFound(id)
        }

        return user

    }

    async createUser (name: string, surname: string, email: string, password: string, type: UserType): Promise<User> {
        
        const existing = await this.helper.findUserByEmail(email)

        if (existing) {
            throw new ExistingEmailError(`The email ${email} is already in use`)
        }

        const user = User.create(name, surname, email, password, type)

        return this.helper.saveUser(user)
    }

    async updateUser (id: string, name: string, surname: string, email: string, password: string, type: UserType): Promise<User> {
        const existing = await this.findUserById(id)

        const updatedUser = existing.update(name, surname, email, password, type)

        return this.helper.saveUser(updatedUser)
    }

    async deleteUser (idToDelete: string, authenticatedUserId: string): Promise<void> {
        if (idToDelete !== authenticatedUserId) {
            throw new UnauthorizedUserError("Acció prohibida: només pots esborrar el teu propi usuari")
        }

        await this.findUserById(idToDelete)
        await this.helper.deleteUser(idToDelete)
    }

}