"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inscriptionService = void 0;
const inscription_1 = require("../entities/inscription");
const inscriptionNotFound_1 = require("../errors/inscription/inscriptionNotFound");
class inscriptionService {
    helper;
    eventService;
    constructor(helper, eventService) {
        this.helper = helper;
        this.eventService = eventService;
    }
    async findInscriptionById(id) {
        const inscription = await this.helper.findInscriptionById(id);
        if (!inscription) {
            throw new inscriptionNotFound_1.InscriptionNotFound(id);
        }
        return inscription;
    }
    async findInscriptions() {
        return this.helper.findInscriptions();
    }
    async createInscription(truckId, eventId, participation) {
        const inscription = inscription_1.Inscription.create(truckId, eventId, participation);
        return this.helper.saveInscription(inscription);
    }
    async updateInscription(id, participation) {
        const existing = await this.findInscriptionById(id);
        const updatedInscription = existing.update({ participation });
        const saved = await this.helper.saveInscription(updatedInscription);
        if (participation === false) {
            const allInscriptions = await this.findInscriptions();
            const activeInscriptions = allInscriptions.filter(i => i.truckId === saved.truckId &&
                i.participation === true);
            const alternativeEvents = [];
            for (const inscription of activeInscriptions) {
                const event = await this.eventService.findEventById(inscription.eventId);
                alternativeEvents.push(event);
            }
            return { updated: saved, alternatives: alternativeEvents };
        }
        return { updated: saved, alternatives: [] };
    }
    async deleteInscription(id) {
        await this.findInscriptionById(id);
        await this.helper.deleteInscription(id);
    }
}
exports.inscriptionService = inscriptionService;
//# sourceMappingURL=inscriptionService.js.map