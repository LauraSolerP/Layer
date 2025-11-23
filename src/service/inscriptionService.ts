import { Inscription } from "../entities/inscription";
import { InscriptionNotFound } from "../errors/inscription/inscriptionNotFound";
import { inscriptionHelper } from "../helpers/inscriptionHelper";
import { eventService } from "./eventService";


export class inscriptionService {

    constructor(
        private readonly helper: inscriptionHelper,
        private readonly eventService: eventService
    ) { }

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

    async updateInscription(id: string, participation?: boolean): Promise<{ updated: Inscription, alternatives: any[] }> {
        const existing = await this.findInscriptionById(id)

        const updatedInscription = existing.update({ participation })

        const saved = await this.helper.saveInscription(updatedInscription)

        if (participation === false) {
            const allInscriptions = await this.findInscriptions()
            const activeInscriptions = allInscriptions.filter(i =>
                i.truckId === saved.truckId &&
                i.participation === true)

            const alternativeEvents = []
            for (const inscription of activeInscriptions) {
                const event = await this.eventService.findEventById(inscription.eventId)
                alternativeEvents.push(event)
            }
            return { updated: saved, alternatives: alternativeEvents }
        }

        return { updated: saved, alternatives: [] }
    }

    async deleteInscription(id: string): Promise<void> {
        await this.findInscriptionById(id)
        await this.helper.deleteInscription(id)
    }

}