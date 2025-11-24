"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putDishRoute = putDishRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const putDishController_1 = require("../../controllers/dishControllers/putDishController");
const dishService_1 = require("../../service/dishService");
const dishHelper_1 = require("../../helpers/dishHelper");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const user_orderHelper_1 = require("../../helpers/user_orderHelper");
const user_orderService_1 = require("../../service/user_orderService");
const helper = new dishHelper_1.dishHelper();
const uOrderHelper = new user_orderHelper_1.userOrderHelper();
const uOrderService = new user_orderService_1.userOrderService(uOrderHelper);
const service = new dishService_1.dishService(helper, uOrderService);
const putDishController = new putDishController_1.PutDishController(service);
function putDishRoute(router) {
    router.put("/v1/dish/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), putDishController.run.bind(putDishController));
}
//# sourceMappingURL=putDish.js.map