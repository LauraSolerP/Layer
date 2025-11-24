import { Helper } from "./helper";
import { EntitySchema } from "typeorm";
import { Inscription } from "../entities/inscription";
export declare class inscriptionHelper extends Helper<Inscription> {
    getEntitySchema(): EntitySchema<Inscription>;
    findInscriptionById(id: string): Promise<Inscription | null>;
    findInscriptions(): Promise<Inscription[]>;
    saveInscription(inscription: Inscription): Promise<Inscription>;
    deleteInscription(id: string): Promise<void>;
}
//# sourceMappingURL=inscriptionHelper.d.ts.map