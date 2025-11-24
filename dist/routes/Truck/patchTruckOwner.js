"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchTruckOwnerRoute = patchTruckOwnerRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const patchTruckOwnerController_1 = require("../../controllers/truckControllers/patchTruckOwnerController");
const truckHelper_1 = require("../../helpers/truckHelper");
const truckService_1 = require("../../service/truckService");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new truckHelper_1.truckHelper();
const service = new truckService_1.truckService(helper);
const patchTruckOwnerController = new patchTruckOwnerController_1.PatchTruckOwnerController(service);
function patchTruckOwnerRoute(router) {
    router.patch("/v1/truck/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), patchTruckOwnerController.run.bind(patchTruckOwnerController));
}
//# sourceMappingURL=patchTruckOwner.js.map