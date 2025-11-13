import { Entity } from "./entity"


export class User implements Entity {
    constructor(
        readonly id: string,
        readonly nom: string,
        readonly cognom: string,
        readonly email: string,
        readonly password: string
    ) {}

    getPrimitive () {
        return {
            id: this.id,
            nom: this.nom,
            cognom: this.cognom,
            email: this.email,
            password: this.password
        }
    }

    static create (id: string, nom: string, cognom: string, email: string, password: string): User {
        return new User(id, nom, cognom, email, password)
    }

    update (nom: string, cognom: string): User {
        return new User(
            this.id,
            nom,
            cognom,
            this.email,
            this.password
        )
    }

}