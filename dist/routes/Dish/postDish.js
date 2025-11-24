"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postDishRoute = postDishRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const postDishController_1 = require("../../controllers/dishControllers/postDishController");
const dishService_1 = require("../../service/dishService");
const dishHelper_1 = require("../../helpers/dishHelper");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const user_orderHelper_1 = require("../../helpers/user_orderHelper");
const user_orderService_1 = require("../../service/user_orderService");
const helper = new dishHelper_1.dishHelper();
const uOrderHelper = new user_orderHelper_1.userOrderHelper();
const uOrderService = new user_orderService_1.userOrderService(uOrderHelper);
const service = new dishService_1.dishService(helper, uOrderService);
const postDishController = new postDishController_1.PostDishController(service);
function postDishRoute(router) {
    router.post("/v1/dish", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), postDishController.run.bind(postDishController));
}
//# sourceMappingURL=postDish.js.map