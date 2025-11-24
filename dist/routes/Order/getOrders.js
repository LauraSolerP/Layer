"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrdersRoute = getOrdersRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const getOrdersController_1 = require("../../controllers/orderControllers/getOrdersController");
const orderHelper_1 = require("../../helpers/orderHelper");
const orderService_1 = require("../../service/orderService");
const helper = new orderHelper_1.orderHelper();
const service = new orderService_1.orderService(helper);
const getOrdersController = new getOrdersController_1.GetOrdersController(service);
function getOrdersRoute(router) {
    router.get("/v1/order", new userMiddleware_1.UserMiddleware().run, getOrdersController.run.bind(getOrdersController));
}
//# sourceMappingURL=getOrders.js.map