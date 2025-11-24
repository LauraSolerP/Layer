"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrucksRoute = getTrucksRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const getTrucksController_1 = require("../../controllers/truckControllers/getTrucksController");
const truckHelper_1 = require("../../helpers/truckHelper");
const truckService_1 = require("../../service/truckService");
const helper = new truckHelper_1.truckHelper();
const service = new truckService_1.truckService(helper);
const getTrucksController = new getTrucksController_1.GetTrucksController(service);
function getTrucksRoute(router) {
    router.get("/v1/truck/:id", new userMiddleware_1.UserMiddleware().run, getTrucksController.run.bind(getTrucksController));
}
//# sourceMappingURL=getTrucks.js.map