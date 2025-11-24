"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderRoute = getOrderRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const getOrderController_1 = require("../../controllers/orderControllers/getOrderController");
const orderHelper_1 = require("../../helpers/orderHelper");
const orderService_1 = require("../../service/orderService");
const helper = new orderHelper_1.orderHelper();
const service = new orderService_1.orderService(helper);
const getOrderController = new getOrderController_1.GetOrderController(service);
function getOrderRoute(router) {
    router.get("/v1/order/:id", new userMiddleware_1.UserMiddleware().run, getOrderController.run.bind(getOrderController));
}
//# sourceMappingURL=getOrder.js.map