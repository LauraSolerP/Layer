"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchOrderDeliveryRoute = patchOrderDeliveryRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const patchOrderDeliveryController_1 = require("../../controllers/orderControllers/patchOrderDeliveryController");
const orderHelper_1 = require("../../helpers/orderHelper");
const orderService_1 = require("../../service/orderService");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new orderHelper_1.orderHelper();
const service = new orderService_1.orderService(helper);
const patchOrderDeliveryController = new patchOrderDeliveryController_1.PatchOrderDeliveryController(service);
function patchOrderDeliveryRoute(router) {
    router.patch("/v1/order/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), patchOrderDeliveryController.run.bind(patchOrderDeliveryController));
}
//# sourceMappingURL=patchOrderDelivery.js.map