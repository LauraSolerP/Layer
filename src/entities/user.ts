import { Entity } from "./entity"
import { v4 } from "uuid"

enum UserType{
    CLIENT = 'CLIENT',
    OWNER = 'OWNER'
}

export class User implements Entity {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly surname: string,
        readonly email: string,
        readonly password: string,
        readonly type: UserType
    ) {}

    getPrimitive () {
        return {
            id: this.id,
            nom: this.name,
            cognom: this.surname,
            email: this.email,
            password: this.password,
            type: this.type
        }
    }

    static create (id: string, name: string, surname: string, email: string, password: string, type: UserType): User {
        return new User(
            id = v4(),
            name, 
            surname, 
            email, 
            password, 
            type = UserType.CLIENT)
    }

    update (name: string, surname: string, email: string, password: string, type: UserType): User {
        return new User(
            this.id,
            name,
            surname,
            email,
            password,
            type
        )
    }

}