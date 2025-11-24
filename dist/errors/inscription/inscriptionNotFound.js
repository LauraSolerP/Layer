"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscriptionNotFound = void 0;
class InscriptionNotFound extends Error {
    inscriptionId;
    constructor(id) {
        const message = `The inscription with id ${id} can't be reached`;
        super(message);
        this.inscriptionId = id;
        this.name = 'InscriptionNotFound';
    }
}
exports.InscriptionNotFound = InscriptionNotFound;
//# sourceMappingURL=inscriptionNotFound.js.map