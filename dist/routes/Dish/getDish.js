"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDishRoute = getDishRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const getDishController_1 = require("../../controllers/dishControllers/getDishController");
const dishHelper_1 = require("../../helpers/dishHelper");
const user_orderHelper_1 = require("../../helpers/user_orderHelper");
const dishService_1 = require("../../service/dishService");
const user_orderService_1 = require("../../service/user_orderService");
const helper = new dishHelper_1.dishHelper();
const uOrderHelper = new user_orderHelper_1.userOrderHelper();
const uOrderService = new user_orderService_1.userOrderService(uOrderHelper);
const service = new dishService_1.dishService(helper, uOrderService);
const getDishController = new getDishController_1.GetDishController(service);
function getDishRoute(router) {
    router.get("/v1/dish/:id", new userMiddleware_1.UserMiddleware().run, getDishController.run.bind(getDishController));
}
//# sourceMappingURL=getDish.js.map