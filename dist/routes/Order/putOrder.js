"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putOrderRoute = putOrderRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const putOrderController_1 = require("../../controllers/orderControllers/putOrderController");
const orderService_1 = require("../../service/orderService");
const orderHelper_1 = require("../../helpers/orderHelper");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new orderHelper_1.orderHelper();
const service = new orderService_1.orderService(helper);
const putOrderController = new putOrderController_1.PutOrderController(service);
function putOrderRoute(router) {
    router.put("/v1/order/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER", "ADMIN"]), putOrderController.run.bind(putOrderController));
}
//# sourceMappingURL=putOrder.js.map