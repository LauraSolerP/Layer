"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTruckRoute = deleteTruckRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const deleteTruckController_1 = require("../../controllers/truckControllers/deleteTruckController");
const truckHelper_1 = require("../../helpers/truckHelper");
const truckService_1 = require("../../service/truckService");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new truckHelper_1.truckHelper();
const service = new truckService_1.truckService(helper);
const deleteTruckController = new deleteTruckController_1.DeleteTruckController(service);
function deleteTruckRoute(router) {
    router.delete("/v1/truck/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), deleteTruckController.run.bind(deleteTruckController));
}
//# sourceMappingURL=deleteTruck.js.map