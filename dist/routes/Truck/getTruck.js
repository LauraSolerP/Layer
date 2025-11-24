"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTruckRoute = getTruckRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const getTruckController_1 = require("../../controllers/truckControllers/getTruckController");
const truckHelper_1 = require("../../helpers/truckHelper");
const truckService_1 = require("../../service/truckService");
const helper = new truckHelper_1.truckHelper();
const service = new truckService_1.truckService(helper);
const getTruckController = new getTruckController_1.GetTruckController(service);
function getTruckRoute(router) {
    router.get("/v1/truck/:id", new userMiddleware_1.UserMiddleware().run, getTruckController.run.bind(getTruckController));
}
//# sourceMappingURL=getTruck.js.map