import { Inscription } from "../entities/inscription";
import { inscriptionHelper } from "../helpers/inscriptionHelper";
import { eventService } from "./eventService";
export declare class inscriptionService {
    private readonly helper;
    private readonly eventService;
    constructor(helper: inscriptionHelper, eventService: eventService);
    findInscriptionById(id: string): Promise<Inscription>;
    findInscriptions(): Promise<Inscription[]>;
    createInscription(truckId: string, eventId: string, participation: boolean): Promise<Inscription>;
    updateInscription(id: string, participation?: boolean): Promise<{
        updated: Inscription;
        alternatives: any[];
    }>;
    deleteInscription(id: string): Promise<void>;
}
//# sourceMappingURL=inscriptionService.d.ts.map