"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTruckRoute = postTruckRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const postTruckController_1 = require("../../controllers/truckControllers/postTruckController");
const truckService_1 = require("../../service/truckService");
const truckHelper_1 = require("../../helpers/truckHelper");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new truckHelper_1.truckHelper();
const service = new truckService_1.truckService(helper);
const postTruckController = new postTruckController_1.PostTruckController(service);
function postTruckRoute(router) {
    router.post("/v1/truck", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), postTruckController.run.bind(postTruckController));
}
//# sourceMappingURL=postTruck.js.map