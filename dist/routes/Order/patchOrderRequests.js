"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchOrderRequestsRoute = patchOrderRequestsRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const patchOrderRequestsController_1 = require("../../controllers/orderControllers/patchOrderRequestsController");
const orderHelper_1 = require("../../helpers/orderHelper");
const orderService_1 = require("../../service/orderService");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new orderHelper_1.orderHelper();
const service = new orderService_1.orderService(helper);
const patchOrderRequestsController = new patchOrderRequestsController_1.PatchOrderRequestsController(service);
function patchOrderRequestsRoute(router) {
    router.patch("/v1/order/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), patchOrderRequestsController.run.bind(patchOrderRequestsController));
}
//# sourceMappingURL=patchOrderRequests.js.map