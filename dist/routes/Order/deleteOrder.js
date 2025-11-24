"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderRoute = deleteOrderRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const deleteOrderController_1 = require("../../controllers/orderControllers/deleteOrderController");
const orderHelper_1 = require("../../helpers/orderHelper");
const orderService_1 = require("../../service/orderService");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new orderHelper_1.orderHelper();
const service = new orderService_1.orderService(helper);
const deleteOrderController = new deleteOrderController_1.DeleteOrderController(service);
function deleteOrderRoute(router) {
    router.delete("/v1/order/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), deleteOrderController.run.bind(deleteOrderController));
}
//# sourceMappingURL=deleteOrder.js.map