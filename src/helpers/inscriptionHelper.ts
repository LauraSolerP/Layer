import { Helper } from "./helper";
import { InscriptionModel } from "../model/inscription.model";
import { EntitySchema } from "typeorm";
import { Inscription } from "../entities/inscription";


export class inscriptionHelper extends Helper<Inscription> {

    getEntitySchema(): EntitySchema<Inscription> {
        return InscriptionModel
    }

    async findInscriptionById(id: string): Promise<Inscription | null> {
        return (await this.getRepository()).findOneBy({ id })
    }

    async findInscriptions(): Promise<Inscription[]> {
        return (await this.getRepository()).find()
    }

    async saveInscription(inscription: Inscription): Promise<Inscription> {
        return (await this.getRepository()).save(inscription)
    }

    async deleteInscription(id: string): Promise<void> {
        await (await this.getRepository()).delete(id)
    }
} 