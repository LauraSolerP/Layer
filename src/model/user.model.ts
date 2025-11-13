import { EntitySchema } from "typeorm"
import { User } from "../entities/user"

export const UserModel = new EntitySchema<User>({
    name: "user",
    tableName: "user",
    target: User,
    columns: {
        id: {
            type: String,
            primary: true
        },
        nom: {
            type: String
        },
        cognom: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
    }
})