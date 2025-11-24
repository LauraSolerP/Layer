"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postOrderRoute = postOrderRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const postOrderController_1 = require("../../controllers/orderControllers/postOrderController");
const orderService_1 = require("../../service/orderService");
const orderHelper_1 = require("../../helpers/orderHelper");
const helper = new orderHelper_1.orderHelper();
const service = new orderService_1.orderService(helper);
const postOrderController = new postOrderController_1.PostOrderController(service);
function postOrderRoute(router) {
    router.post("/v1/order", new userMiddleware_1.UserMiddleware().run, postOrderController.run.bind(postOrderController));
}
//# sourceMappingURL=postOrder.js.map