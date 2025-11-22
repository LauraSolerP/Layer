import { v4 } from "uuid"
import { Entity } from "./entity"



export class Truck implements Entity {
    constructor(
        readonly id: string,
        readonly ownerId: string,
        readonly nom: string
    ) { }

    getPrimitive() {
        return {
            id: this.id,
            ownerId: this.ownerId,
            nom: this.nom
        }
    }

    static create(ownerId: string, nom: string): Truck {
        return new Truck(
            v4(),
            ownerId,
            nom)
    }

    update(data: { ownerId?: string | undefined, nom?: string | undefined }): Truck {
        return new Truck(
            this.id,
            data.ownerId ?? this.ownerId,
            data.nom ?? this.nom
        )
    }

}