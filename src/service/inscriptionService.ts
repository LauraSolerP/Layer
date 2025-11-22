import { Inscription } from "../entities/inscription";
import { InscriptionNotFound } from "../errors/inscription/inscriptionNotFound";
import { inscriptionHelper } from "../helpers/inscriptionHelper";


export class inscriptionService {

    constructor(private readonly helper: inscriptionHelper) { }

    async findInscriptionById(id: string): Promise<Inscription> {

        const inscription = await this.helper.findInscriptionById(id)

        if (!inscription) {
            throw new InscriptionNotFound(id)
        }

        return inscription

    }

    async findInscriptions(): Promise<Inscription[]> {
        return this.helper.findInscriptions()
    }

    async createInscription(truckId: string, eventId: string, participation: boolean): Promise<Inscription> {


        const inscription = Inscription.create(truckId, eventId, participation)

        return this.helper.saveInscription(inscription)
    }

    async updateInscription(id: string, participation?: boolean): Promise<Inscription> {
        const existing = await this.findInscriptionById(id)

        const updatedInscription = existing.update({ participation })

        return this.helper.saveInscription(updatedInscription)
    }

    async deleteInscription(id: string): Promise<void> {
        await this.findInscriptionById(id)
        await this.helper.deleteInscription(id)
    }

}