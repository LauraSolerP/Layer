"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchTruckInscriptionRoute = patchTruckInscriptionRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const patchTruckInscriptionController_1 = require("../../controllers/truckControllers/patchTruckInscriptionController");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const inscriptionService_1 = require("../../service/inscriptionService");
const inscriptionHelper_1 = require("../../helpers/inscriptionHelper");
const eventHelper_1 = require("../../helpers/eventHelper");
const eventService_1 = require("../../service/eventService");
const iHelper = new inscriptionHelper_1.inscriptionHelper();
const eHelper = new eventHelper_1.eventHelper();
const eService = new eventService_1.eventService(eHelper);
const iService = new inscriptionService_1.inscriptionService(iHelper, eService);
const patchTruckInscriptionController = new patchTruckInscriptionController_1.PatchTruckInscriptionController(iService);
function patchTruckInscriptionRoute(router) {
    router.patch("/v1/truck/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER", "ADMIN"]), patchTruckInscriptionController.run.bind(patchTruckInscriptionController));
}
//# sourceMappingURL=patchTruckInscription.js.map