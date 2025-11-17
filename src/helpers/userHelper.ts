import { Helper } from "./helper";
import { UserModel } from "../model/user.model";
import { EntitySchema } from "typeorm";
import { User } from "../entities/user";


export class userHelper extends Helper<User> {
    
    getEntitySchema(): EntitySchema<User> {
        return UserModel
    }

    async findUserById (id: string): Promise<User | null> {
        return (await this.getRepository()).findOneBy({id})
    }

    async findUserByEmail (email: string): Promise<User | null> {
        return (await this.getRepository()).findOneBy({email})
    }

    async saveUser (user: User): Promise<User> {
        return (await this.getRepository()).save(user)
    }

    async deleteUser (id: string): Promise<void> {
        await (await this.getRepository()).delete(id)
    }
} 