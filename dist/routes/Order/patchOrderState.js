"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchOrderStateRoute = patchOrderStateRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const patchOrderStateController_1 = require("../../controllers/orderControllers/patchOrderStateController");
const orderHelper_1 = require("../../helpers/orderHelper");
const orderService_1 = require("../../service/orderService");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new orderHelper_1.orderHelper();
const service = new orderService_1.orderService(helper);
const patchOrderStateController = new patchOrderStateController_1.PatchOrderStateController(service);
function patchOrderStateRoute(router) {
    router.patch("/v1/order/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), patchOrderStateController.run.bind(patchOrderStateController));
}
//# sourceMappingURL=patchOrderState.js.map