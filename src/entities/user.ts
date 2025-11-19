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


    update (data: {name?: string | undefined, surname?: string | undefined, email?: string | undefined, password?: string | undefined, type?: UserType | undefined}): User {
        return new User(
            this.id,
            data.name ?? this.name,
            data.surname ?? this.surname,
            data.email ?? this.email,
            data.password ?? this.password,
            data.type ?? this.type
        )
    }

}