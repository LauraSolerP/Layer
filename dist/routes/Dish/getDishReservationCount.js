"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDishReservationCountRoute = getDishReservationCountRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const getDishReservartionCountController_1 = require("../../controllers/dishControllers/getDishReservartionCountController");
const dishHelper_1 = require("../../helpers/dishHelper");
const dishService_1 = require("../../service/dishService");
const user_orderHelper_1 = require("../../helpers/user_orderHelper");
const user_orderService_1 = require("../../service/user_orderService");
const helper = new dishHelper_1.dishHelper();
const uOrderHelper = new user_orderHelper_1.userOrderHelper();
const uOrderService = new user_orderService_1.userOrderService(uOrderHelper);
const service = new dishService_1.dishService(helper, uOrderService);
const getDishReservationCountController = new getDishReservartionCountController_1.GetDishReservationCountController(service);
function getDishReservationCountRoute(router) {
    router.get("/v1/dish/:id", new userMiddleware_1.UserMiddleware().run, getDishReservationCountController.run.bind(getDishReservationCountController));
}
//# sourceMappingURL=getDishReservationCount.js.map