"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putTruckRoute = putTruckRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const putTruckController_1 = require("../../controllers/truckControllers/putTruckController");
const truckService_1 = require("../../service/truckService");
const truckHelper_1 = require("../../helpers/truckHelper");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new truckHelper_1.truckHelper();
const service = new truckService_1.truckService(helper);
const putTruckController = new putTruckController_1.PutTruckController(service);
function putTruckRoute(router) {
    router.put("/v1/truck/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), putTruckController.run.bind(putTruckController));
}
//# sourceMappingURL=putTruck.js.map