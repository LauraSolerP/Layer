"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchOrderPriceRoute = patchOrderPriceRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const patchOrderPriceController_1 = require("../../controllers/orderControllers/patchOrderPriceController");
const orderHelper_1 = require("../../helpers/orderHelper");
const orderService_1 = require("../../service/orderService");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new orderHelper_1.orderHelper();
const service = new orderService_1.orderService(helper);
const patchOrderPriceController = new patchOrderPriceController_1.PatchOrderPriceController(service);
function patchOrderPriceRoute(router) {
    router.patch("/v1/order/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), patchOrderPriceController.run.bind(patchOrderPriceController));
}
//# sourceMappingURL=patchOrderPrice.js.map