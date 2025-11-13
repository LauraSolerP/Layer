import { Entity } from "./entity"



export class Truck implements Entity {
    constructor(
        readonly id: string,
        readonly ownerId: string,
        readonly nom: string,
        readonly eventId: string
    ) {}

    getPrimitive () {
        return {
            id: this.id,
            ownerId: this.ownerId,
            nom: this.nom
        }
    }

    static create (id: string, ownerId: string, nom: string): Truck {
        return new Truck(id, ownerId, nom)
    }

    update (ownerId: string, nom: string): Truck {
        return new Truck(
            this.id,
            ownerId,
            nom
        )
    }

}