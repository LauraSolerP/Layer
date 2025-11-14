import { Entity } from "./entity"
import { v4 } from "uuid"

enum UserType{
    CLIENT = 'CLIENT',
    OWNER = 'OWNER'
}

export class User implements Entity {
    constructor(
        readonly id: string,
        readonly nom: string,
        readonly cognom: string,
        readonly email: string,
        readonly password: string,
        readonly type: UserType
    ) {}

    getPrimitive () {
        return {
            id: this.id,
            nom: this.nom,
            cognom: this.cognom,
            email: this.email,
            password: this.password,
            type: this.type
        }
    }

    static create (id: string, nom: string, cognom: string, email: string, password: string, type: UserType): User {
        return new User(id,
            nom = v4(), 
            cognom, 
            email, 
            password, 
            type = UserType.CLIENT)
    }

    update (nom: string, cognom: string, email: string, password: string, type: UserType): User {
        return new User(
            this.id,
            nom,
            cognom,
            email,
            password,
            type
        )
    }

}