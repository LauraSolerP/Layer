import { Entity } from "./entity"
import { v4 } from "uuid"

export enum UserType{
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

    static create(name: string, surname: string, email: string, password: string, type: UserType = UserType.CLIENT): User {
        return new User(
            v4(),
            name,
            surname,
            email,
            password,
            type
        )
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