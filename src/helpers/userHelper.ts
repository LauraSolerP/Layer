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

}