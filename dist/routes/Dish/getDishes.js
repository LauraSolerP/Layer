"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDishesRoute = getDishesRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const getDishesController_1 = require("../../controllers/dishControllers/getDishesController");
const dishHelper_1 = require("../../helpers/dishHelper");
const dishService_1 = require("../../service/dishService");
const user_orderHelper_1 = require("../../helpers/user_orderHelper");
const user_orderService_1 = require("../../service/user_orderService");
const helper = new dishHelper_1.dishHelper();
const uOrderHelper = new user_orderHelper_1.userOrderHelper();
const uOrderService = new user_orderService_1.userOrderService(uOrderHelper);
const service = new dishService_1.dishService(helper, uOrderService);
const getDishesController = new getDishesController_1.GetDishesController(service);
function getDishesRoute(router) {
    router.get("/v1/dish", new userMiddleware_1.UserMiddleware().run, getDishesController.run.bind(getDishesController));
}
//# sourceMappingURL=getDishes.js.map