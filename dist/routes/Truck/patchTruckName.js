"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchTruckNameRoute = patchTruckNameRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const patchTruckNameController_1 = require("../../controllers/truckControllers/patchTruckNameController");
const truckHelper_1 = require("../../helpers/truckHelper");
const truckService_1 = require("../../service/truckService");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new truckHelper_1.truckHelper();
const service = new truckService_1.truckService(helper);
const patchTruckNameController = new patchTruckNameController_1.PatchTruckNameController(service);
function patchTruckNameRoute(router) {
    router.patch("/v1/truck/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), patchTruckNameController.run.bind(patchTruckNameController));
}
//# sourceMappingURL=patchTruckName.js.map