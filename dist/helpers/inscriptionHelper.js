"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inscriptionHelper = void 0;
const helper_1 = require("./helper");
const inscription_model_1 = require("../model/inscription.model");
class inscriptionHelper extends helper_1.Helper {
    getEntitySchema() {
        return inscription_model_1.InscriptionModel;
    }
    async findInscriptionById(id) {
        return (await this.getRepository()).findOneBy({ id });
    }
    async findInscriptions() {
        return (await this.getRepository()).find();
    }
    async saveInscription(inscription) {
        return (await this.getRepository()).save(inscription);
    }
    async deleteInscription(id) {
        await (await this.getRepository()).delete(id);
    }
}
exports.inscriptionHelper = inscriptionHelper;
//# sourceMappingURL=inscriptionHelper.js.map